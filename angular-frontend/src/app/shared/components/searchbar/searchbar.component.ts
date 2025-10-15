import { Component, output } from "@angular/core";
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
  search = output<string>();
  // searchClick = output<string>();

  onSearchChange() {
    this.search.emit(this.searchTerm);
  }

  // onSearchClick() {
  //   this.searchClick.emit(this.searchTerm);
  // }
}
