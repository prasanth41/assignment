import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private router: Router,) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLoggedIn = sessionStorage.getItem('isLogin');
    if (isLoggedIn) {
      return true
    } else {
      this.router.navigate(['/login']);
    }
  }
}
