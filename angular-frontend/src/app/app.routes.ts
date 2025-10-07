import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';
import { IfIsAuthGuard } from './core/guards/if-is-auth.guard';
import { LogoutComponent } from './features/auth/logout/logout.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [IfIsAuthGuard] },
    { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [IfIsAuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/login' , pathMatch: 'full' },
];
