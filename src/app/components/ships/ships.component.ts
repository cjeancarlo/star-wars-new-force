import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import { Observable } from 'rxjs';
import { Ship } from 'src/app/interfaces/ship.interface';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;
  ships$: Observable<Array<Ship>>;

  constructor(private shipService: ShipService) { }

  ngOnInit() {
    this.ships$ = this.shipService.ships;
  }

  itemsLoaded() {
    console.log('itemsloaded');
  }
  



}
