import { Injectable } from "@angular/core";
import { VKMModule } from "../../shared/models/vkm.model";

@Injectable({
  providedIn: "root",
})
export class FilterService {
    private modules: VKMModule[] = [];

    constructor() { }

    filterModules(searchTerm: string): VKMModule[] {
        if (!searchTerm) { return this.modules; }
        const lowerCaseTerm = searchTerm.toLowerCase();
        return this.modules.filter(module =>
            module.location.toLowerCase().includes(lowerCaseTerm) ||
            module.level.toLowerCase().includes(lowerCaseTerm) ||
            module.name.toLowerCase().includes(lowerCaseTerm)
        );
    }
    setModules(modules: VKMModule[]): void {
        this.modules = modules;
    }
}