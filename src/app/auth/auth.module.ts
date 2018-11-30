import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import {AuthRoutingModule} from './auth-routing.module';

// Modules
import {ShareModule} from '../share/share.module';

// Components
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';



@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ShareModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthComponent
  ]
})
export class AuthModule { }
