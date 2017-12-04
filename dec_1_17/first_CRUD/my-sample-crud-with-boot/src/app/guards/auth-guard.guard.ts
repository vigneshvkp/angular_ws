import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserServiceService} from '../services/user-service.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthGuardGuard implements CanActivate {

  constructor(private user: UserServiceService, private route: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.user.getIsUserLoggedIn()) {
      this.route.navigate(['/']);
    }
    return this.user.getIsUserLoggedIn();
  }
}
