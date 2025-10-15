import { Component, input, output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-dropdown",
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: "./dropdown.component.html",
})
export class DropdownComponent {

    label = input<string>('');
    options = input<{ value: string; label: string }[]>();
    selectionChange = output<string>();

    selectedValue: string = "";

    onSelectionChange(event: Event) {
        const selectElement = (event.target as HTMLSelectElement).value;
        this.selectionChange.emit(selectElement);
    }
}