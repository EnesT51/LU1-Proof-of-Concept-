import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-searchbar",
    standalone: true,
    imports: [FormsModule],
    templateUrl: "./searchbar.component.html",
    styleUrls: ["./searchbar.component.css"]
})
export class SearchbarComponent {
  searchTerm: string = "";
  @Output() search = new EventEmitter<string>();

  onSearchChange() {
    this.search.emit(this.searchTerm);
  }

  onSearchClick() {
    this.search.emit(this.searchTerm);
  }
}
