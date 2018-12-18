import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { User } from '../Models/user.model';

// Base Api
import { BaseApi } from '../../content/share/config/base-api';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseApi {
  constructor( public http: HttpClient ) {
    super( http );
  }

  // The method returns one user given email.
  getUserByEmail ( email: string ): Observable <User> {
    return this.get(false, `users?email=${email}`).pipe(filter(el => {
      const x = el[0];
      console.log('service login', x);
      return x;
    }));
  }
  // The method creates a user.
  createNewUser (user: User): Observable <User> {
    return this.post(false, 'users', user );
  }
}
