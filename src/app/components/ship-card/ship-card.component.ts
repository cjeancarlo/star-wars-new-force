import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ship } from 'src/app/interfaces/ship.interface';
import { ShipService } from 'src/app/services/ship.service';
import { ShipInfoDetailComponent } from '../ship-info-detail/ship-info-detail.component';

@Component({
  selector: 'app-ship-card',
  templateUrl: './ship-card.component.html',
  styleUrls: ['./ship-card.component.css']
})
export class ShipCardComponent implements OnInit {

@Input() ship: Ship;

  constructor(private shipService: ShipService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  get starshipId() {
    return this.shipService.getStarshipId(this.ship);
  }


  openDialogInfo(): void {
    const dialogRef = this.dialog.open(ShipInfoDetailComponent, {
      panelClass: 'ship-no-padding-dialog',
      //width: '70%',
      data:  this.ship
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
