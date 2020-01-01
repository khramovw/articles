import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

// Services
import { UsersService } from '../../share/services/users.service';
import { AuthService } from '../../share/services/auth.service';

// Models
import { User } from '../../share/Models/user.model';
import { Message } from '../../share/Models/message.model';
import {tap} from 'rxjs/operators';


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
      'email': new FormControl('eve.holt@reqres.in', [Validators.required, Validators.email]),
      'password': new FormControl('cityslicka', [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    // Data entered in the form.
    this.formData = this.form.value;

    // Auth user
    this.usersService.authUser(this.formData)
      .subscribe( (user: {token: string} )=> {

        localStorage.setItem('user', JSON.stringify({email: this.formData.email, token: user.token}));
        // After I sent the data I answer the forum
        this.form.reset();

        // authorize the user
        this.authservice.login();

        // and it redirects to the page of articles.
        this.router.navigate(['/', 'article']);

      }, error => console.error(error));


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
