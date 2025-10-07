import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IfIsAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

    canActivate(): Observable<boolean> | boolean {
        return this.authService.checkAuth().pipe(
            map(isAuth => {
                if (isAuth) {
                    console.log("User is authenticated, redirecting to dashboard");
                    this.router.navigate(['/dashboard']);
                    return false;
                }
                console.log("User is not authenticated");
                return true;
            })
        );
    }
}