import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { AuthRoutingModule } from './auth-routing.module';

// Modules
import { ShareModule } from '../share/share.module';

// Components
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';
import { MessagePageComponent } from './message-page/message-page.component';



@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ShareModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthComponent,
    MessagePageComponent
  ]
})
export class AuthModule { }
