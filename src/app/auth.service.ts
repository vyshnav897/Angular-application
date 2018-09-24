import { Injectable } from '@angular/core';


@Injectable()
export class AuthService  {
 private loggedIn = false;
 constructor() { }

 logIn() {
     sessionStorage.setItem("loggedIn",'true');
     this.loggedIn = true;
 }
 isLoggedIn() {
     return sessionStorage.getItem("loggedIn");
 }

}