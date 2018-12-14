import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

// Services
import {UsersService} from '../../share/services/users.service';

// Models
import { User } from '../../share/Models/user.model';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    // Validation of user input.
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.checkExistingUser.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required]),
      'agree': new FormControl(false, [Validators.requiredTrue])
    });
  }

  onSubmit() {
    // Create a new user.
    const { email, name, password } = this.form.value;
    const user = new User( email, name, password );
    // Sending a new user to the server.
    this.usersService.createNewUser(user).subscribe(() => {
      // Upon successful registration, send to users on the registration confirmation page.
      this.router.navigate(['/message-page'], {queryParams: {registered: true}});
    }, error => {
      // If an error occurs during registration, the user is poisoned to the error page.
      error.url === null ? this.router.navigate(['/message-page'], {queryParams: {url: false}}) :
        this.router.navigate(['/message-page'], {queryParams: {registered: false}});
    });
  }

  // Asynchronous method. Checks the existence of the user.
  checkExistingUser ( control: FormControl): Promise<any> {
    return new Promise (( resolve, reject) => {
      this.usersService.getUserByEmail(control.value).subscribe( user => {
        const el: User = user[0];
        el ? resolve({forbiddenemail: true}) : reject(null);
      });
    });
  }
}
