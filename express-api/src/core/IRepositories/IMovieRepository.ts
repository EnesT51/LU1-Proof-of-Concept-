import { Movie } from "../entities/Movies";


export interface IMovieRepository {
    getAllMovies(): Promise<Movie[]>;

}