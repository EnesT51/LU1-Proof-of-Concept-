import { ModuleService } from "../../module-detail/services/module.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { VKMModule } from "../../../core/models/vkm.model";



@Injectable({
    providedIn: "root"
})
export class StudentModuleService{
    constructor(private moduleService: ModuleService) { }

    // getStudentModules(studentId: string): Observable<VKMModule[]> {
        
    // }
}

