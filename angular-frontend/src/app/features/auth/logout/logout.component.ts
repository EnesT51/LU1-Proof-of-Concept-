import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-logout',
    standalone: true,
    imports: [],
    template: '',
})

export class LogoutComponent {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.logout().subscribe(() => {
        this.router.navigate(['/login']);
    });
  }
}