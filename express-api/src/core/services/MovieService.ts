import { MovieRepository } from "../../infrastructure/Repositories/MovieRepository";
import { Movie } from "../entities/Movies";


export class MovieService {

    constructor(private movieRepository: MovieRepository) {}

    async getAllMovies(): Promise<Movie[]> {

        try{
            return await this.movieRepository.getAllMovies();
        } catch (error) {
            console.error("Error fetching movies:", error);
            throw new Error("Could not fetch movies");
        }
    }
}
