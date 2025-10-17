import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export abstract class AbstractModuleService {
    abstract addModuleForStudent(moduleId: string): Observable<any>;
    abstract getModuleById(id: string): Observable<any>;
}
