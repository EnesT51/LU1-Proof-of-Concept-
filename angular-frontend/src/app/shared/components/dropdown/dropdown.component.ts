import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-dropdown",
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: "./dropdown.component.html",
})
export class DropdownComponent {
    @Input() label: string = "";
    @Input() options: { value: string; label: string }[] = [];
    @Output() selectionChange = new EventEmitter<string>();

    selectedValue: string = "";

    onSelectionChange(event: Event) {
        const selectElement = (event.target as HTMLSelectElement).value;
        this.selectionChange.emit(selectElement);
    }
}