import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { User } from '../Models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'http://localhost:4400/';
  usersByEmail;
  createUser;


  constructor( private http: HttpClient) { }

  getUserByEmail ( email: string): Observable<User> {
    this.usersByEmail = this.http.get(`${this.apiUrl}users?email=${email}`);
    return this.usersByEmail;
  }
  createNewUser (user: User): Observable<User> {
    this.createUser = this.http.post(`${this.apiUrl}users`, user);
    return this.createUser;
  }
}
