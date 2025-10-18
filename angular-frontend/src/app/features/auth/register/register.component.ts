import { Component } from "@angular/core";
import { AuthService } from "../../../core/services/auth.service";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { Register } from "../../../core/models/register.model";
import { AlertService } from "../../../core/services/alert.service";


@Component({
    imports: [CommonModule, FormsModule, RouterLink],
    selector: "app-register",
    standalone: true,
    templateUrl: "./register.component.html",
})
export class RegisterComponent {
    constructor(public auth: AuthService, private router: Router, private alertService: AlertService) {
        this.auth.cleanErrorObject();
    }

    successMessage: string = '';

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
                if (!success) {
                    return;
                }
                this.alertService.show(success.message, 'success');
                this.auth.cleanErrorObject();
                this.router.navigate(["/auth/login"]);
            },
            error: (err) => {
                this.auth.errorObject = err ? err : err.message;
            }
        });
    }
}
