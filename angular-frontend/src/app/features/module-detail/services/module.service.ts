import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, catchError, scheduled, asyncScheduler, finalize } from "rxjs";
import { environment } from "../../../../environments/env.dev";
import { VKMModule } from "../../../core/models/vkm.model";

@Injectable({
  providedIn: "root",
})
export class ModuleService {
    private apiUrl = `${environment.apiUrl}`;

    constructor(private http: HttpClient) {}

    getModules(): Observable<VKMModule[]> {
        return this.http.get<VKMModule[]>(`${this.apiUrl}/vkm`, { withCredentials: true })
        .pipe(
            map((response: VKMModule[]) => response),
            catchError(this.handleError)
        );
    }
    getModuleById(id: string): Observable<VKMModule> {
        return this.http.get<VKMModule>(`${this.apiUrl}/vkm/${id}`, { withCredentials: true })
        .pipe(
            map((response: VKMModule) => response),
            catchError(this.handleError)
        );
    }
    addModuleForStudent(moduleId: string): Observable<{message: string}> {
        return this.http.post<{message: string}>(`${this.apiUrl}/student/modules/${moduleId}`, {}, { withCredentials: true })
        .pipe(
            map((response: {message: string}) => response),
            catchError(this.handleError)
        );
    }
    getStudentModules(): Observable<VKMModule[]> {
        return this.http.get<VKMModule[]>(`${this.apiUrl}/student/`, { withCredentials: true })
        .pipe(
            map((response: VKMModule[]) => response),
            catchError(this.handleError)
        );
    }
    private handleError(error: any) {
        let errorMessage = error.message || "Een onbekende fout is opgetreden";
        console.error("Een fout is opgetreden:", errorMessage);
        return scheduled([error], asyncScheduler);
    }
}