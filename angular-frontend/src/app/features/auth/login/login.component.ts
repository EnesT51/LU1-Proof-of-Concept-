import { Component } from "@angular/core";
import { AuthService } from "../../../core/services/auth.service";
import { Router } from "@angular/router";
import { Login } from "../../../core/models/login..model";
import { CommonModule , } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { AlertService } from "../../../core/services/alert.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: "./login.component.html",
})
export class LoginComponent {
    constructor(public authService: AuthService, private routes: Router, private alertService: AlertService) {
        this.authService.cleanErrorObject();
    }
    
    loginForm: Login = {
        email: '',
        password: ''
    };
    
    login() {
        this.authService.login(this.loginForm).subscribe({
            next: (success) => {
                if (!success) {
                    return;
                }
                this.authService.cleanErrorObject();
                this.alertService.show(success.message, "success");
                return this.routes.navigate(["/keuzemodule/dashboard"]);
            },
            error: (err) => {
                this.authService.errorObject = err ? err : err.message;
            }
        });
    }
}
  
