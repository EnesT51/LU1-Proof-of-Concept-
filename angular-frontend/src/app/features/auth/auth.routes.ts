import { Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { IfIsAuthGuard } from "../../core/guards/if-is-auth.guard";
import { AuthGuard } from "../../core/guards/auth.guard";

export const authRoutes: Routes = [
    { path: '',
        children: [
            { path: 'login', component: LoginComponent, canActivate: [IfIsAuthGuard] },
            { path: 'register', component: RegisterComponent, canActivate: [IfIsAuthGuard] },
            { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] }
        ]
    }
];

