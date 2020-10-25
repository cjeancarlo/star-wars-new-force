import { Injectable } from '@angular/core';
import { BehaviorSubject,  Observable, of } from 'rxjs';
import {  mergeMap } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';
import { ResonseUser } from '../interfaces/response.user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private responseSubject: BehaviorSubject<ResonseUser>;
  public response: Observable<ResonseUser>;

  private arrayUsers: User[] = [{
    id: 0,
    username: 'jcartaya',
    password: 'jcartaya'
  }, {
    id: 1,
    username: 'fsalas',
    password: 'password2'
  }];

  private cache$: Observable<User[]>;
  source: Observable<User[]> = of(this.arrayUsers);

  constructor() {

    this.responseSubject = new BehaviorSubject<ResonseUser>(null);
    this.response = this.responseSubject.asObservable();
  }

  get users() {
    if (!this.cache$) {
      console.log('frrom cache');
      this.cache$ = this.source;
    }

    return this.cache$;
  }

  authUser(username: string, password: string) {
    return this.users.pipe(
      mergeMap(user => {
        const curretuser = user.filter( currentuser =>  currentuser.username === username && currentuser.password === password )
        if (curretuser.length !== 0) {
          this.responseSubject.next({
            success: true,
            message: 'Welcome ' + user[0].username
          });
          return of(user[0]);
        } else {
          this.responseSubject.next({
            success: false,
            message: 'Username or password is incorrect'
          });
          return of();
        }
      }),
    );

  }


  createUser(user: User) {
    this.users.pipe().subscribe((responseUsers: User[]) => {

      if (responseUsers.filter(u => u.username === user.username).length !== 0) {
        console.log('entre aqui');
        this.responseSubject.next(
          {
            success: false,
            message: 'Username "' + user.username + '" is already taken'
          }
        );
        return;
      }

      const lastUser = this.arrayUsers[this.arrayUsers.length - 1] || { id: 0 };
      user.id = lastUser.id + 1;

      // save to local storage
      this.arrayUsers.push(user);
      this.setUsers();

    });

  }


  private setUsers() {
    localStorage.users = JSON.stringify(this.arrayUsers);
  }



}
