import { Routes } from "@angular/router";
import { ReviewComponent } from "./review.component";
import { AuthGuard } from "../../core/guards/auth.guard";

export const reviewRoutes: Routes = [
    {
        path: '',
        children: [ {path: ':moduleId', component: ReviewComponent, canActivate: [AuthGuard]} ]
    }
];
