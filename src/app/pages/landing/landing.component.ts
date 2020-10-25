import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


  constructor( private authenticationService: AuthenticationService) { }

  ngOnInit(): void { }

  isAuth(): boolean {
        return this.authenticationService.isAuth;
  }

}
