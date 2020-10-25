import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { shareReplay, map, switchMap, mergeMap, toArray, tap } from 'rxjs/operators';
import { Ship } from '../interfaces/ship.interface';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  iconos = [
    'ship-info-icon'
  ];

  private cache$: Observable<Array<Ship>>;

  private jsonURL = './assets/data/starships.example.json';
  private CACHE_SIZE = 1;
  constructor(private http: HttpClient, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {


    this.iconos.forEach(i => {
      iconRegistry.addSvgIcon(
        i,
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/' + i + '.svg')
      );
    });

  }


  get ships() {
    if (!this.cache$) {
      this.cache$ = this.getFlatShips().pipe(
        //shareReplay(this.CACHE_SIZE),
        switchMap(ships => ships),
        mergeMap(this.getFilms),
        toArray()
      );
    }
    return this.cache$;

  }

  getFlatShips() {
    return this.requestShips(this.jsonURL).pipe(
      shareReplay(this.CACHE_SIZE),
    );
  }

  getFilms = (ship: Ship) => {
    const details = [];

    ship.films.forEach(film => {
      const url = film.replace('swapi.co', 'swapi.dev');
      this.getInfoRequest(url).subscribe(f => {
        details.push(f);
      });

    });

    return of({
      ...ship,
      filmsDetail: details
    });


  }

  private requestShips(url: string) {
    return this.http.get<any>(url).pipe(
      map(response => response.results)
    );
  }

  getInfoRequest(url: string) {
    return this.http.get<any>(url).pipe(
      map(response => response)
    );

  }



  public getStarshipId(ship: Ship): string {
    const url = ship.url;
    return url.split('/').filter(item => item !== '').slice(-1)[0];
  }

}
