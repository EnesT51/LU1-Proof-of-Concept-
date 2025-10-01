import { MovieRepository } from "src/infrastructuur/repositories/MovieRepository";
import { Movie } from "../entities/Movies";
import { Injectable } from "@nestjs/common";


@Injectable()
export class MovieService {
    constructor(private readonly movieRepository: MovieRepository) {}

    async findAll(): Promise<Movie[]> {
        try{
            return this.movieRepository.findAll();
        }catch(error){
            return [error];
        }
    }
}