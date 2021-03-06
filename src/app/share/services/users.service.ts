import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';

// Models
import { User } from '../Models/user.model';

// Base Api
import { BaseApi } from '../../content/share/config/base-api';


@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseApi {

  constructor( public http: HttpClient ) {
    super( http );
  }

  // The method returns one user given email.
  getUserByEmail ( email: string ): Observable <User> {
    return this.get(false, `users?email=${email}`).pipe(map(user => user[0]));
  }
  // The method creates a user.
  createNewUser (user: User): Observable <User> {
    return this.post(false, 'users', user );
  }
  // Auth reqres.in
  authUser ( user: User ): Observable <{token: string}> {
    return this.post(false, `/login`, user)
      .pipe(
        tap( ({token}) => {
          // if ( res.token ) localStorage.setItem('auth_token', res.token);
          if ( token ) sessionStorage.setItem('auth_token', token);
          if ( token ) localStorage.setItem('user', JSON.stringify({token}));
        })
      )
  }
}

