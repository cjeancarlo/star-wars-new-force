import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ShipBase64 } from '../interfaces/base64.class';
import { User } from '../interfaces/user.interface';
import { UserService } from './user.service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuth = false;
  private shipBase64 = new ShipBase64();

  constructor(private router: Router, private http: HttpClient, private userService: UserService) {
    this.CheckIsAuth();
  }

  login(username: string, password: string) {
    this.userService.authUser(username, password).subscribe((user: User) => {
      const e = this.shipBase64.encode(JSON.stringify(user));
      localStorage.setItem('currentUser', JSON.stringify(e));
      this.userService.currentUserSubject.next(user);

    });
  }


  private CheckIsAuth() {
    this.userService.currentUser.subscribe((current: User) => {
      this.isAuth = false;
      if (current) {
        this.isAuth = true;
      }

    });


  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.userService.currentUserSubject.next(null);
    this.router.navigate(['landing']);

  }

}
