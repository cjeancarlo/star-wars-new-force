import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShipService } from 'src/app/services/ship.service';
import { Ship } from 'src/app/interfaces/ship.interface';


@Component({
  selector: 'app-ship-info-detail',
  templateUrl: './ship-info-detail.component.html',
  styleUrls: ['./ship-info-detail.component.css']
})
export class ShipInfoDetailComponent implements OnInit {

  constructor(
    private shipService: ShipService,
    public dialogRef: MatDialogRef<ShipInfoDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public ship: Ship) { }

  ngOnInit(): void {
    console.log(this.ship);
  }

  get starshipId() {
    return this.shipService.getStarshipId(this.ship);
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
