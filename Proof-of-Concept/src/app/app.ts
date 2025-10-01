import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieListComponent } from "./components/movie.list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieListComponent],
  template: '<app-movie-list></app-movie-list>',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Proof-of-Concept');
}
