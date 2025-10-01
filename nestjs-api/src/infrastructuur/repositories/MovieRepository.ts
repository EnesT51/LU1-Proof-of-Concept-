import { Inject, Injectable } from '@nestjs/common';
import { Db } from 'mongodb';
import { Movie } from 'src/core/entities/Movies';
import { IMovieRepository } from 'src/core/IRepositories/IMovieRepository';

@Injectable()
export class MovieRepository implements IMovieRepository {

    constructor(@Inject('DATABASE_CONNECTION') private readonly dbConnection: Db) {}

    async findAll(): Promise<Movie[]> {
        return this.dbConnection.collection('movies').find().limit(100).toArray() as Promise<Movie[]>;
    }
}