import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { shareReplay, map, filter } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';


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


  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>



  source: Observable<any> = from([{
    id: 0,
    username: 'jcartaya',
    password: 'jcartaya'
  }, {
    id: 1,
    username: 'fsalas',
    password: 'password2'
  }]
  );


  constructor(private http: HttpClient) {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }




  login(username: string, password: string) {
    return  this.source.pipe(filter(user => user.username === username && user.password === password));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }


}