import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // authorization status
  private isAuthenticated = false;

  constructor() { }

  // User authorization method.
  login () {
    this.isAuthenticated = true;
  }

  // user ragouting method
  logout () {
    this.isAuthenticated = false;
    window.localStorage.clear();
  }

  // Method returns authorization status.
  isLoggedin () {
    return this.isAuthenticated;
  }
}
