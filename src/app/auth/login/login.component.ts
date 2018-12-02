import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { UsersService } from '../../share/services/users.service';
import { AuthService } from '../../share/services/auth.service';

// Models
import { User } from '../../share/Models/user.model';
import { Message } from '../../share/Models/message.model';


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
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
    this.message = new Message('', 'danger');
  }

  onSubmit() {
    this.formData = this.form.value;
    this.usersService.getUserByEmail(this.formData.email).subscribe( ( user ) => {
      const el: User = user[0];
      if ( el ) {
        if ( el.password === this.formData.password) {
          window.localStorage.setItem('user', JSON.stringify(el));
          this.authservice.login();
          // this.router.navigate(['/home']);
        } else {
          this.showMessage('Password is incorrect', 'danger');
          return false;
        }
      } else {
        this.showMessage('Email is incorrect', 'danger');
      }
    }, error => console.log(error));
  }

  private showMessage ( text: string, type: string ) {
    this.message = new Message(text, type);
    window.setTimeout(() => {
      this.message.text = '';
      this.message.type = '';
    }, 5000);
  }
}
