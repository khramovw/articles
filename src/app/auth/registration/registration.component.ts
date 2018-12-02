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
  formData;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.checkExistingUser.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name': new FormControl(null, [Validators.required]),
      'agree': new FormControl(false, [Validators.requiredTrue])
    });
  }

  onSubmit() {
    const { email, name, password } = this.form.value;
    const user = new User( email, name, password );
    this.usersService.createNewUser(user).subscribe((e) => {
      this.router.navigate(['/message-page'], {queryParams: {registered: true}});
      console.log(e);
    }, error => {
      this.router.navigate(['/message-page'], {queryParams: {registered: false}});
    });
  }

  checkExistingUser ( control: FormControl): Promise<any> {
    console.log(control);
    return new Promise (( resolve, reject) => {
      this.usersService.getUserByEmail(control.value).subscribe( user => {
        const el: User = user[0];
        el ? resolve({forbiddenemail: true}) : reject(null);
      });
    });
  }
}
