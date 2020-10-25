import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css']
})
export class ShowMessageComponent  {


  constructor(
    public snackBarRef: MatSnackBarRef<ShowMessageComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { 

    console.log(this.data)
  }
}

