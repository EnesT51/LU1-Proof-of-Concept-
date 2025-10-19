import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from "@angular/common";
import { AlertComponent } from "./components/alertmessage/alert.message";

export const sharedImports = [
    CommonModule,
    NavComponent,
    FooterComponent,
    AlertComponent
];