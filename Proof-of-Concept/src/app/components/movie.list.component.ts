import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../services/movies.service";
import { Movie } from "../models/movie.models";
import { CommonModule } from "@angular/common";
import { MovieCardComponent } from "./movie.card.component";

@Component({
  selector: "app-movie-list",
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: "movie.list.component.html",
})
export class MovieListComponent implements OnInit {
    movies: Movie[] = [];
    loading: boolean = true;

    constructor(private moviesService: MoviesService) {}

    ngOnInit(): void {
        this.moviesService.getMovies().subscribe(({
            next: (data) => {
                this.movies = data;
                this.loading = false;
            },
            error: (error) => {
                console.error("Error fetching movies:", error);
                this.loading = false;
            }
        }));
    }
}