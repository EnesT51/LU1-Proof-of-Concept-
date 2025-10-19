import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../../core/services/alert.service';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
        @if (alertService.message()) {
  <div
    class="alert alert-dismissible fade show shadow-sm text-center mb-0 fw-semibold"
    [ngClass]="'alert-' + alertService.type()"
    role="alert"
  >
    {{ alertService.message() }}
    <button
      type="button"
      class="btn-close position-absolute end-0 me-3"
      aria-label="Close"
      (click)="alertService.clear()"
    ></button>
  </div>
}
  `,
})
export class AlertComponent {
    constructor(public alertService: AlertService) {}
}