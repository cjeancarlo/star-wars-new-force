import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
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
  constructor(private http: HttpClient,iconRegistry: MatIconRegistry,  sanitizer: DomSanitizer) {


    this.iconos.forEach(i => {
      iconRegistry.addSvgIcon(
        i,
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/' + i + '.svg')
      );
    });

  }



 








  get ships() {
    if (!this.cache$) {
      this.cache$ = this.requestShips().pipe(
        shareReplay(this.CACHE_SIZE)
      );
    }

    return this.cache$;
  }


  private requestShips() {
    return this.http.get<any>(this.jsonURL).pipe(
      map(response => response.results)
    );
  }



  public getStarshipId(ship: Ship): string {
    const url = ship.url;
    return url.split('/').filter(item => item !== '').slice(-1)[0];
  }

}
