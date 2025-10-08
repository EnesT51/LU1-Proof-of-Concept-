import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth.routes';
import { dashboardRoutes } from './features/dashboard/dashboard.routes';

export const routes: Routes = [
    { path: 'keuzemodule', children: dashboardRoutes },
    { path: 'auth', children: authRoutes },
    { path: '', redirectTo: '/auth/login', pathMatch: 'prefix' },
];
