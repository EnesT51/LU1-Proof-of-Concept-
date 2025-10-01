import { MovieService } from "../../core/services/MovieService";
import { Request, Response } from "express";


export class MovieController {

    constructor(private movieService: MovieService) {}

    async getAllMovies(req: Request, res: Response): Promise<void> {
        const movies = await this.movieService.getAllMovies().then(movies => {
            res.json(movies);
        }).catch(error => {
            res.status(500).json({ error: error.message });
        });
        return movies;
    }
}

