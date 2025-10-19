import { SearchbarComponent } from "../shared/components/searchbar/searchbar.component";
import { CommonModule } from "@angular/common";
import { ModuleListComponent } from "../shared/components/module-list/module-list.component";
import { ModuleDetailComponent } from "./module-detail/module-detail.component";
export const featureImports = [
    CommonModule,
    SearchbarComponent,
    ModuleListComponent,
    ModuleDetailComponent
];
