import { Component } from "@angular/core";
import { AuthService } from "../../../core/services/auth.service";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { Register } from "../../../core/models/register.model";


@Component({
    imports: [CommonModule, FormsModule, RouterLink],
    selector: "app-register",
    standalone: true,
    templateUrl: "./register.component.html",
})
export class RegisterComponent {
    constructor(private auth: AuthService, private router: Router) {}

    registerForm: Register = {
        email: '',
        password: '',
        name: '',
        surname: '',
        birthDate: ''
    };

    register() {
        this.auth.register(this.registerForm).subscribe({
            next: (success) => {
                if (success) {
                    this.router.navigate(["/login"]);
                    return;
                } else {
                    console.error("Registration failed");
                }
            },
            error: (err) => {
                console.log(this.registerForm)
                console.error("Registration failed", err);
            }
        });
    }
}
