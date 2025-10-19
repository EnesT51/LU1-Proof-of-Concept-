import { Component } from '@angular/core';
import { featureImports } from '../feature.components';
import { FilterService } from './services/filter.service';
import { VKMModule } from '../../core/models/vkm.model';
import { ModuleService } from '../module-detail/services/module.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [...featureImports],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  constructor(
    private moduleService: ModuleService, 
    private filterService: FilterService) { }
    
    modules: VKMModule[] = [];
    isLoading = false;

    ngOnInit() {
        this.setLoading(true);
        this.moduleService.getModules().subscribe(
            (data) => {
                this.filterService.setModules(data);
                this.modules = data;
                this.setLoading(false);
            }, 
            (error) => {
                this.setLoading(false);
                this.handleError(error);
            });
    }
    onSearch(searchTerm: string) {
        this.modules = this.filterService.filterModules(searchTerm);
    }
    private handleError(error: any) {
        console.error('An error occurred:', error);
    }
    private setLoading(value: boolean) { this.isLoading = value; }
}
