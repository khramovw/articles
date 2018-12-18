import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Routers
import { AppRoutingModule } from './app-routing.module';

// Modules
import { AuthModule } from './auth/auth.module';
import { MainModule } from './content/main.module';

// Services
import { UsersService } from './share/services/users.service';
import { AuthService } from './share/services/auth.service';
import { AuthGuard } from './share/services/auth.guard';

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
    AuthModule,
    MainModule
  ],
  providers: [UsersService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
