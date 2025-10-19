import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './../../../core/services/auth.service';

@Component({
    selector: 'app-nav',
    imports: [CommonModule, RouterLink],
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
    standalone: true,
})
export class NavComponent {

    constructor(public authService: AuthService) {} 
}
