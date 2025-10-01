import { Module } from '@nestjs/common';
import { MovieController } from '../controllers/movie.controller';
import { MovieService } from '../../core/services/MovieService';
import { MovieRepository } from '../../infrastructuur/repositories/MovieRepository';
import { DatabaseModule } from '../../infrastructuur/db_config/db.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MovieController],
  providers: [MovieService, MovieRepository],
})
export class MovieModule {}
