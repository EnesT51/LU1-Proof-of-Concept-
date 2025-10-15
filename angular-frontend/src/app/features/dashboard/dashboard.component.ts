import { Component } from '@angular/core';
import { featureImports } from '../feature.components';
import { ModuleService } from '../../core/services/module.service';
import { FilterService } from '../../core/services/filter.service';
import { VKMModule } from '../../shared/models/vkm.model';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [...featureImports],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  constructor(
    private dashboardService: ModuleService, 
    private filterService: FilterService) { }
    
    modules: VKMModule[] = [];
    isLoading = false;

    ngOnInit() {
        this.setLoading(true);
        this.dashboardService.getModules().subscribe(
            (data) => {
                this.filterService.setModules(data);
                this.modules = data;
                this.setLoading(false);
            }
        );
    }
    onSearch(searchTerm: string) {
        this.modules = this.filterService.filterModules(searchTerm);
    }

    private setLoading(value: boolean) { this.isLoading = value; }
}
