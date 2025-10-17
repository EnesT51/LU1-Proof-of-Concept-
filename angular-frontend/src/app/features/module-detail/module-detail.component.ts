import { Component } from "@angular/core";
import { VKMModule } from "../../core/models/vkm.model";
import { ModuleCardComponent } from "../../shared/components/module.card/module-card.component";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { RouterLink } from "@angular/router";
import { ModuleService } from "./services/module.service";
import { SpinnerComponent } from "../../shared/components/spinner/spinner.component";


@Component({
    selector: "app-module-detail",
    standalone: true,
    imports: [ModuleCardComponent, CommonModule, RouterLink, SpinnerComponent],
    templateUrl: "./module-detail.component.html",
})
export class ModuleDetailComponent {

    constructor(private moduleService: ModuleService, private route: ActivatedRoute) { }

    module: VKMModule = {} as VKMModule;
    isLoading = false;
    errorMessage = '';

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (!id){
            this.setLoading(false);
            this.setError('Ongeldig module ID');
            return;
        }
        this.setLoading(true);
        this.moduleService.getModuleById(id).subscribe(
            (data) => {
                this.module = data;
                this.setLoading(false);
            }
        );
    }
    addModuleForStudent(moduleId: string): void {
        this.moduleService.addModuleForStudent(moduleId).subscribe(
            (response) => {
                console.log("Module toegevoegd voor student:", response);
            },
            (error) => {
                console.error("Fout bij het toevoegen van module voor student:", error);
            }
        );
    }
    setLoading(value: boolean) { this.isLoading = value; }
    setError(message: string) { this.errorMessage = message; }
}
