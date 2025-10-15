import { Component } from "@angular/core";
import { VKMModule } from "../../shared/models/vkm.model";
import { ModuleCardComponent } from "../../shared/components/module.card/module-card.component";
import { ModuleService } from "../../core/services/module.service";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-module-detail",
    standalone: true,
    imports: [ModuleCardComponent, CommonModule, RouterLink],
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
    setLoading(value: boolean) { this.isLoading = value; }
    setError(message: string) { this.errorMessage = message; }
}
