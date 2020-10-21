import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ship } from 'src/app/interfaces/ship.interface';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  ships$: Observable<Array<Ship>>;

  constructor(private shipService: ShipService) { }

  ngOnInit() {
    this.ships$ = this.shipService.ships;
  }


 
}
