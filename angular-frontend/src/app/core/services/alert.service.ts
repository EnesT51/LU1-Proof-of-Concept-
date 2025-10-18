import { Injectable, signal } from '@angular/core';

export type AlertType = 'success' | 'danger' | 'warning' | 'info';

@Injectable({ providedIn: 'root' })
export class AlertService {
    message = signal<string | null>(null);
    type = signal<AlertType>('success');

    show(msg: string, type: AlertType = 'success', duration = 4000) {
        this.message.set(msg);
        this.type.set(type);

        if (duration > 0) {
            setTimeout(() => this.clear(), duration);
        }
    }

    clear() {
        this.message.set(null);
    }
}