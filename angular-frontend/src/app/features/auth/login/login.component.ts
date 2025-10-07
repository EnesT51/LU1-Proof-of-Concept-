import { Component } from "@angular/core";
import { AuthService } from "../../../core/services/auth.service";
import { Router } from "@angular/router";
import { Login } from "../../../shared/models/login..model";
import { CommonModule , } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: "./login.component.html",
})
export class LoginComponent {
    constructor(private authService: AuthService, private routes: Router) {}
    
    loginForm: Login = {
        email: '',
        password: ''
    };
    
    login() {
        this.authService.login(this.loginForm).subscribe({
            next: (success) => {
                if (!success) {
                    console.error("Login failed");
                    return;
                }
                console.log("Login successful");
                this.routes.navigate(["/dashboard"]);
            },
            error: (err) => {
                // Handle login error
                console.error("Login failed", err);
            }
        });
    }
}
  
