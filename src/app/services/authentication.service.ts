import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { UserService } from './user.service.service';

class ShipBase64 {
  encode(s: string) {
    return window.btoa(s);
  }

  decode(s: string) {
    return window.atob(s);
  }
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuth = false;
  private shipBase64 = new ShipBase64();
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private router: Router, private http: HttpClient, private userService: UserService) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser !== null) {
      currentUser = this.shipBase64.decode(currentUser);
    }

    this.currentUserSubject = new BehaviorSubject<User>(currentUser);
    this.currentUser = this.currentUserSubject.asObservable();
    this.CheckIsAuth();
  }

  login(username: string, password: string) {
    this.userService.authUser(username, password).subscribe((user: User) => {
      console.log('ssssssssssssss', user.id);
      const e = this.shipBase64.encode(JSON.stringify(user));
      localStorage.setItem('currentUser', JSON.stringify(e));
      this.currentUserSubject.next(user);

    });
  }


  private CheckIsAuth() {
    this.currentUser.subscribe((current: User) => {


      console.log('verificando', current);
      this.isAuth = false;
      if (current) {
        console.log('checkin', current);
        this.isAuth = true;
      }



    });


  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['landing']);

  }

}
