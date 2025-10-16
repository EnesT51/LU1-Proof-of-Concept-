import { Component, input } from "@angular/core";
import { VKMModule } from "../../models/vkm.model";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-module-card",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./module-card.component.html",
})
export class ModuleCardComponent {

  module = input<VKMModule>();
  mode = input<string>();
}