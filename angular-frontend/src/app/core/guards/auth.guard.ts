import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.checkAuth().pipe(
        map(IsAuth => {
            console.log("AuthGuard: isAuthenticated =", IsAuth);
        if (!IsAuth) {
            console.log("User is not authenticated, redirecting to login");
            this.router.navigate(['/auth/login']);
            return false;
        }
        console.log("User is authenticated");
        return true;
        })
    );
  }
}