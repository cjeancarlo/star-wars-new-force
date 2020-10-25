import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  constructor( private authenticationService: AuthenticationService) { }
  ngOnInit(): void {
  }

isAuth(): boolean {
  return this.authenticationService.isAuth;
}


logout() {
    this.authenticationService.logout();
}

}
