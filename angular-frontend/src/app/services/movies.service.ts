import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../models/movie.models";
import { environment } from "../../environments/env.dev";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
    private apiUrl = `${environment.apiUrl}/vkm`;
    constructor(private http: HttpClient) {}

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.apiUrl, { withCredentials: true });
    }
}