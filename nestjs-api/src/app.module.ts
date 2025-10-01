import { Module } from '@nestjs/common';
import { MovieModule } from './presentatie/modules/movie.module';

@Module({
	imports: [MovieModule],
})
export class AppModule {}
