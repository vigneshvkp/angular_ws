import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from './services/user.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  constructor(private user: UserService, private route: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.user.getUserLoggedIn()) {
      this.route.navigate(['/']);
    }
    return this.user.getUserLoggedIn();
  }
}
