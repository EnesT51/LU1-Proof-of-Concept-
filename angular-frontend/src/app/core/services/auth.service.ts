import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, map, catchError, throwError, of, tap } from "rxjs";
import { environment } from "../../../environments/env.dev";
import { Login } from "../../shared/models/login..model";
import { Register } from "../../shared/models/register.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
    private apiUrl = `${environment.apiUrl}/auth`;
    private _isAuthenticated = false;

    constructor(private http: HttpClient) { }

    login(login: Login): Observable<boolean> {
        return this.http.post<{ success: boolean }>(`${this.apiUrl}/login`, login, { withCredentials: true })
        .pipe(
            tap(response => {
                this.isAuthenticated(response.success);
            }),
            map(response => response.success),
            catchError(this.handleError)
        );
    }
    register(register: Register): Observable<boolean> {
        return this.http.post<{ success: boolean }>(`${this.apiUrl}/register`, register, { withCredentials: true })
        .pipe(
            map(response => response.success),
            catchError(this.handleError)
        );
    }

    logout(): Observable<any> {
        return this.http.post<{ success: boolean }>(`${this.apiUrl}/logout`, {}, { withCredentials: true })
        .pipe(
            tap(() => {
                this.isAuthenticated(false);
            }),
            map(response => response.success),
            catchError(this.handleError)
        );
    }
    checkAuth(): Observable<boolean> {
        return this.http.get<{ success: boolean }>(`${this.apiUrl}/user`, { withCredentials: true })
        .pipe(
            map((res) => { this.isAuthenticated(res.success); return this._isAuthenticated; }),
            catchError(() => of(false))
        );
    }
    private isAuthenticated(value: boolean) {
        this._isAuthenticated = value;
    }
    private handleError(error: HttpErrorResponse) {
        let errorMessage = error.message;
        console.error("An error occurred:", errorMessage);
        return of(false);
    }
}