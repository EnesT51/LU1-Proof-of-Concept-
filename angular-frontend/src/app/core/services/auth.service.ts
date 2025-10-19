import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map, catchError, scheduled, tap, asyncScheduler } from "rxjs";
import { environment } from "../../../environments/env.dev";
import { Login } from "../models/login..model";
import { Register } from "../models/register.model";
import { handleError } from "../utils/error-mapper.utils";

@Injectable({
  providedIn: "root",
})
export class AuthService {
    private apiUrl = `${environment.apiUrl}/auth`;
    private _isAuthenticated = false;

    errorObject: any = {};

    constructor(private http: HttpClient) {}

    login(login: Login): Observable<{ success: boolean, message: string }> {
        return this.http.post<{ success: boolean, message: string }>(`${this.apiUrl}/login`, login, { withCredentials: true })
        .pipe(
            tap(response => {
                this.isAuthenticated(response.success);
            }),
            map(response => response),
            catchError((err) => handleError(err))
        );
    }
    register(register: Register): Observable<{ success: boolean, message: string }> {
        return this.http.post<{ success: boolean, message: string }>(`${this.apiUrl}/register`, register, { withCredentials: true })
        .pipe(
            map(response => response),
            catchError((err) => handleError(err))
        );
    }

    logout(): Observable<any> {
        return this.http.post<{ success: boolean, message: string }>(`${this.apiUrl}/logout`, {}, { withCredentials: true })
        .pipe(
            tap(() => {
                this.isAuthenticated(false);
            }),
            map(response => response.success),
            catchError((err) => handleError(err))
        );
    }
    checkAuth(): Observable<boolean> {
        return this.http.get<{ success: boolean }>(`${this.apiUrl}/user`, { withCredentials: true })
        .pipe(
            map((res) => { this.isAuthenticated(res.success); return this._isAuthenticated; }),
            catchError(() => scheduled([false], asyncScheduler))
        );
    }
    cleanErrorObject() {
        this.errorObject = {};
    }
    private isAuthenticated(value: boolean) {
        this._isAuthenticated = value;
    }
    public isLoggedIn(): boolean {
        return this._isAuthenticated;
    }
}