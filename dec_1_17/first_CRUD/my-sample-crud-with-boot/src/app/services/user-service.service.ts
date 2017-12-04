import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceService {

  private username;
  private isUserLoggedIn;

  constructor() {
    this.isUserLoggedIn = false;
  }

  getUsername() {
    return this.username;
  }

  setUsername(value) {
    this.username = value;
  }

  getIsUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  setIsUserLoggedIn(value) {
    this.isUserLoggedIn = value;
  }
}
