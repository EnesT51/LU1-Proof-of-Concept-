import { Controller, Get } from '@nestjs/common';
import { MovieService } from '../../core/services/MovieService';
import { Movie } from '../../core/entities/Movies';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

    @Get()
    async getMovies(): Promise<Movie[]> {
        return await this.movieService.findAll();
    }
}
