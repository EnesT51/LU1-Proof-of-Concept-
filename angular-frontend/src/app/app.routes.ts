import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth.routes';
import { dashboardRoutes } from './features/dashboard/dashboard.routes';
import { moduleDetailRoutes } from './features/module-detail/module-detail.route';

export const routes: Routes = [
    { path: 'keuzemodule', children: dashboardRoutes },
    { path: 'auth', children: authRoutes },
    { path: 'vkm/:id', children: moduleDetailRoutes },
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
];
