import { Injectable, ɵConsole } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';
import { ResonseUser } from '../interfaces/response.user.interface';
import { ShipBase64 } from '../interfaces/base64.class';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private shipBase64 = new ShipBase64();
  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private responseSubject: BehaviorSubject<ResonseUser>;
  public response: Observable<ResonseUser>;

  private arrayUsers: User[] = [{
    id: 0,
    firstname: 'JEAN',
    lastname: 'CARTAYA',
    username: 'jcartaya',
    password: 'jcartaya'
  }, {
    id: 1,
    firstname: 'MARIA',
    lastname: 'SALAS',
    username: 'fsalas',
    password: 'password2'
  }];

  private cache$: Observable<User[]>;
  source: Observable<User[]>;

  constructor() {

    this.getUsers();
    console.log('get current');
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser !== null) {
      currentUser = this.shipBase64.decode(currentUser);
      currentUser = JSON.parse(currentUser);
    }

    this.currentUserSubject = new BehaviorSubject<User>(currentUser);
    this.currentUser = this.currentUserSubject.asObservable();

    this.responseSubject = new BehaviorSubject<ResonseUser>(null);
    this.response = this.responseSubject.asObservable();
  }

  get users() {
    if (!this.cache$) {
      console.log('from cache');
      this.cache$ = this.source;
    }

    return this.cache$;
  }

  authUser(username: string, password: string) {
    return this.users.pipe(
      mergeMap(user => {
        const curretuser = user.filter(currentuser => currentuser.username === username && currentuser.password === password)
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
      this.setUsers(user);

      this.responseSubject.next(
        {
          success: true,
          message: 'User "' + user.username + '" created'
        }
      );

      console.log(this.arrayUsers);
    });

  }


  updateUser(user: User) {
    this.currentUser.pipe(take(1)).subscribe((current: User) => {
      if (current.username === user.username) {
        this.arrayUsers.forEach(u => {
          if (user.username === u.username) {
            u.firstname = user.firstname;
            u.lastname = user.lastname;
            u.password = user.password;
          }
        });
      }
      this.setUsers(user);
      this.responseSubject.next(
        {
          success: true,
          message: 'User "' + user.username + '" Updated'
        }
      );
      console.log(this.arrayUsers);
    })




  }



  private setUsers(user: User) {
    console.log(user);
    this.currentUserSubject.next(user);

    const e = this.shipBase64.encode(JSON.stringify(user));
    localStorage.setItem('currentUser', JSON.stringify(e));

    const eS = this.shipBase64.encode(JSON.stringify(this.arrayUsers));
    localStorage.setItem('users', JSON.stringify(eS));
  }

  private getUsers() {

    let users = JSON.parse(localStorage.getItem('users'));

    if (users !== null) {
      users = this.shipBase64.decode(users);
      users = JSON.parse(users);
      this.source = of(users);
    } else {
      this.source = of(this.arrayUsers);
    }


  }



}
