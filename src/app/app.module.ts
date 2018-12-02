import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

// Routers
import { AppRoutingModule } from './app-routing.module';

// Modules
import {AuthModule} from './auth/auth.module';

// Services
import {UsersService} from './share/services/users.service';
import {AuthService} from './share/services/auth.service';

// Components
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
