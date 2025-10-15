import { Component, input } from "@angular/core";
import { VKMModule } from "../../models/vkm.model";
import { ModuleCardComponent } from "../module.card/module-card.component";

@Component({
    selector: 'app-module-list',
    imports: [ModuleCardComponent],
    standalone: true,
    templateUrl: './module-list.component.html',
})
export class ModuleListComponent {
    modules = input<VKMModule[]>([]);
    isLoading = input<boolean>(false);
}
