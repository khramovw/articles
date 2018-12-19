import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

// Services
import { UsersService } from '../../share/services/users.service';
import { AuthService } from '../../share/services/auth.service';

// Models
import { User } from '../../share/Models/user.model';
import { Message } from '../../share/Models/message.model';
import {filter, map} from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  formData;
  message: Message;

  constructor(
    private usersService: UsersService,
    private authservice: AuthService,
    private router: Router,
    private rout: ActivatedRoute
  ) {}

  ngOnInit() {
    // function initialization
    this.message = new Message('', 'danger');

    // if the user tried to access protected without authorization,
    // then it will be redirected to the login page and shown to the message
    this.rout.queryParams.subscribe( (params: Params) => {
      if ( params['accessDenied'] ) {
        this.showMessage( 'You need to login', 'danger' );
      }
    });
    // form validation
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    // Data entered in the form.
    this.formData = this.form.value;

    // Check entered email
    this.usersService.getUserByEmail(this.formData.email)
      .subscribe( ( user ) => {
      if ( user ) {
        // Check entered  password
        if ( user.password === this.formData.password) {
          window.localStorage.setItem('user', JSON.stringify( user ));

          // authorize the user
          this.authservice.login();

          // and it redirects to the page of articles.
          this.router.navigate(['/', 'article']);

        } else {
          // If the password is invalid I will post a message
          this.showMessage('Password is incorrect', 'danger');
          return false;
        }
      } else {
        // If the email is invalid I will post a message
        this.showMessage('Email is incorrect', 'danger');
      }
    }, error => {
      // If the server does not respond, I will post a message
        error.url === null ? this.router.navigate(['/message-page'], {queryParams: {url: false}}) :
          this.router.navigate(['/message-page'], {queryParams: {registered: false}});
    });
  }

  // Function output message.
  private showMessage ( text: string, type: string ) {
    this.message = new Message(text, type);
    window.setTimeout(() => {
      this.message.text = '';
      this.message.type = '';
    }, 5000);
  }
}
