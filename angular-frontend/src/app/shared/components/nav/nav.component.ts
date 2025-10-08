import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-nav',
    imports: [CommonModule, RouterLink],
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
    standalone: true,
})
export class NavComponent {

}
