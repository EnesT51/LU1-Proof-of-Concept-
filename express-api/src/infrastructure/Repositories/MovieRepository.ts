import { IMovieRepository } from "../../core/IRepositories/IMovieRepository";
import {getDb} from "../config/db"
import { Movie } from "../../core/entities/Movies";

export class MovieRepository implements IMovieRepository {

    async getAllMovies(): Promise<Movie[] | any[]> {
        const db = getDb();
        const movies = await db.collection<Movie>('movies').find().limit(30).toArray();
        return movies;
    }
}