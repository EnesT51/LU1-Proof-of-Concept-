import { Movie } from "src/core/entities/Movies";


export abstract class IMovieRepository {
    abstract findAll(): Promise<Movie[]>;
}