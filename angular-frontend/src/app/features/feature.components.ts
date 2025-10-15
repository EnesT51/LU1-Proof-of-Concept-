import { SearchbarComponent } from "../shared/components/searchbar/searchbar.component";
import { DropdownComponent } from "../shared/components/dropdown/dropdown.component";
import { CommonModule } from "@angular/common";
import { ModuleListComponent } from "../shared/components/module-list/module-list.component";
import { ModuleDetailComponent } from "./module-detail/module-detail.component";
export const featureImports = [
    CommonModule,
    SearchbarComponent,
    DropdownComponent,
    ModuleListComponent,
    ModuleDetailComponent
];
