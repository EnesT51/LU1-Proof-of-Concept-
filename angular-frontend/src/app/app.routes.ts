import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth.routes';
import { dashboardRoutes } from './features/dashboard/dashboard.routes';
import { moduleDetailRoutes } from './features/module-detail/module-detail.route';
import { studentModuleRoutes } from './features/student-modules/student-module.routes';
import { reviewRoutes } from './features/review/review.routes';


export const routes: Routes = [
    { path: 'keuzemodule', children: dashboardRoutes },
    { path: 'auth', children: authRoutes },
    { path: 'detail', children: moduleDetailRoutes },
    { path: 'keuzemodule/registered-modules', children: studentModuleRoutes },
    { path: 'reviews', children: reviewRoutes },
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
];
