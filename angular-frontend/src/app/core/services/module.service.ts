import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, catchError, scheduled, asyncScheduler } from "rxjs";
import { environment } from "../../../environments/env.dev";
import { VKMModule } from "../../shared/models/vkm.model";


@Injectable({
  providedIn: "root",
})
export class ModuleService {
    private apiUrl = `${environment.apiUrl}`;

    constructor(private http: HttpClient) { }

    getModules(): Observable<any> {
        return this.http.get<{ modules: VKMModule[] }>(`${this.apiUrl}/vkm`, { withCredentials: true })
        .pipe(
            map(response => response),
            catchError(this.handleError)
        );
    }

    getModuleById(id: string): Observable<any> {
        return this.http.get<{module: VKMModule}>(`${this.apiUrl}/vkm/${id}`, { withCredentials: true })
        .pipe(
            map(response => response),
            catchError(this.handleError)
        );
    }
    private handleError(error: any) {
        let errorMessage = error.message || "Een onbekende fout is opgetreden";
        console.error("Een fout is opgetreden:", errorMessage);
        return scheduled([false], asyncScheduler);
    }
}