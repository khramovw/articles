import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor (
    private authservice: AuthService,
    private router: Router
  ) {}

  // Route protection
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Checking authorization status.
    if ( this.authservice.isLoggedin() ) {
      return true;
    } else {
      // An unauthorized user is sending a login to the page.
      this.router.navigate(['/login'], { queryParams: { accessDenied: true }});
    }
    return false;
  }

  // I check for child routes
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate( childRoute, state );
  }
}
