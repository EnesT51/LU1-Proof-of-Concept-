import { Routes } from "@angular/router";
import { ModuleDetailComponent } from "./module-detail.component";
import { AuthGuard } from "../../core/guards/auth.guard";

export const moduleDetailRoutes: Routes = [
    { path: '',
        children: [
            { path: '', component: ModuleDetailComponent, canActivate: [AuthGuard] }
        ]
    }
];
