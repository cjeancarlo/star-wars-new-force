import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})

export class RouteGuard implements CanActivate {

    constructor(private authenticationService: AuthenticationService , private router: Router) { }
    canActivate() {
        // If the user is not logged in we'll send them back to the home page
        if (!this.authenticationService.isAuth) {
            this.router.navigate(['/landing']);
            return false;
        }

        return true;
    }
}
