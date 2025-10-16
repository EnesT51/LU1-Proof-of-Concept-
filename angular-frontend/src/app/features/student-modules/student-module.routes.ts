import { Routes } from "@angular/router";
import { AuthGuard } from "../../core/guards/auth.guard";
import { StudentModuleComponent } from "./student-module.component";

export const studentModuleRoutes: Routes = [
    { path: '',
        children: [
            { path: '', component: StudentModuleComponent, canActivate: [AuthGuard] }
        ]
    }
];