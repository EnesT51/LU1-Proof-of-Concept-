import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'movie.card.component.html',
})
export class MovieCardComponent {
  @Input() movie!: Movie;
}