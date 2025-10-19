import { Component } from "@angular/core";
import { AuthService } from "../../../core/services/auth.service";
import { Router } from "@angular/router";
import { Login } from "../../../core/models/login..model";
import { CommonModule , } from "@angular/common";
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { AlertService } from "../../../core/services/alert.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: "./login.component.html",
})
export class LoginComponent {

    form: FormGroup;

    constructor(public authService: AuthService, private routes: Router, private alertService: AlertService, formBuilder: FormBuilder) {
        this.authService.cleanErrorObject();

        this.form = formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    
    loginForm: Login = {
        email: '',
        password: ''
    };
    
    login() {

        if (this.form.invalid) {
            this.form.markAllAsTouched();
            console.log('Form is invalid');
            return;
        }
        const { email, password } = this.form.value;
        this.loginForm.email = email;
        this.loginForm.password = password; 

        this.authService.login({ ...this.loginForm }).subscribe({
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
  
