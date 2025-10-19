import { Component } from "@angular/core";
import { AuthService } from "../../../core/services/auth.service";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { Register } from "../../../core/models/register.model";
import { AlertService } from "../../../core/services/alert.service";



@Component({
    imports: [CommonModule, FormsModule, RouterLink, ReactiveFormsModule],
    selector: "app-register",
    standalone: true,
    templateUrl: "./register.component.html",
})
export class RegisterComponent {

    form: FormGroup;

    constructor(public auth: AuthService, private router: Router, private alertService: AlertService, formBuilder: FormBuilder) {

        this.form = formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            name: ['', [Validators.required]],
            surname: ['', [Validators.required]],
            birthDate: ['', [Validators.required]]
        });

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

        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const { email, password, name, surname, birthDate } = this.form.value;
        this.registerForm.email = email;
        this.registerForm.password = password;
        this.registerForm.name = name;
        this.registerForm.surname = surname;
        this.registerForm.birthDate = birthDate;

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
