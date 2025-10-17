import { Component, input } from "@angular/core";
import { VKMModule } from "../../models/vkm.model";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReviewComponent } from "../review/review.component";


@Component({
  selector: "app-module-card",
  standalone: true,
  imports: [CommonModule, RouterLink, ReviewComponent],
  templateUrl: "./module-card.component.html",
})
export class ModuleCardComponent {

  module = input<VKMModule>();
  mode = input<string>();
}