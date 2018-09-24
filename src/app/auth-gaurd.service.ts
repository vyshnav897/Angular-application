import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    private loggedIn = false;
    constructor(private authService: AuthService, private router: Router) {

    }
    canActivate() {
        if (this.authService.isLoggedIn() === 'true')
            return true;
        else {
             this.router.navigate(['/login']);
             alert("Not Logged in");
             return false;
        }
    }

}