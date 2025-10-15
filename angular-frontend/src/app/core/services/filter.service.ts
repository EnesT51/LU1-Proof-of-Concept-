import { Injectable } from "@angular/core";
import { Observable, map, catchError, scheduled, tap, asyncScheduler } from "rxjs";
import { environment } from "../../../environments/env.dev";
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