import { Component } from "@angular/core";
import { VKMModule } from "../../core/models/vkm.model";
import { CommonModule } from "@angular/common";
import { ModuleListComponent } from "../../shared/components/module-list/module-list.component";
import { ModuleService } from "../module-detail/services/module.service";
import { SpinnerComponent } from "../../shared/components/spinner/spinner.component";

@Component({
    selector: "app-student-module",
    standalone: true,
    imports: [ModuleListComponent, CommonModule, SpinnerComponent],
    templateUrl: "./student-module.component.html",
})
export class StudentModuleComponent { 
    constructor(private moduleService: ModuleService) { }

    modules = {} as VKMModule[];
    IsLoading = false;

    ngOnInit(): void {
        this.IsLoading = true;
        this.moduleService.getStudentModules().subscribe(
            (data) => {
                this.modules = data;
                this.IsLoading = false;
            },
            (error) => {
                this.handleError(error);
            }
        );
    }
    private handleError(error: any): void {
        console.error("Fout bij het ophalen van studentmodules:", error);
    }
}