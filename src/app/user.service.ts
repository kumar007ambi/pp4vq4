import { Injectable } from '@angular/core';

export class User {
  constructor(
    public name: string,
    public isAuthorized = false) { }
}

// TODO: get the user; don't 'new' it.
const alice = new User('Alice', true);
const bob = new User('Bob', false);

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = bob;  // initial user is Bob

  // swap users
  getNewUser() {
    return this.user = this.user === bob ? alice : bob;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/