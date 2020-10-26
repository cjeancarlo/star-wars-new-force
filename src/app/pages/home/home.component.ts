import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from 'src/app/components/about/about.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  isAuth(): boolean {
    return this.authenticationService.isAuth;
  }


  logout() {
    this.authenticationService.logout();
  }


  openDialogAbout(): void {
    const dialogRef = this.dialog.open(AboutComponent, {

    });

  }


}
