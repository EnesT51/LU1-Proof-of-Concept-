import { Module } from '@nestjs/common';
import { VkmModule } from './presentation/vkm/module/vkm.module';
import { AuthModule } from './presentation/auth/module/auth.module';
import { StudentModule } from './presentation/student/module/student.module';
import { ReviewModule } from './presentation/review/module/review.module';

@Module({
	imports: 
	[
		VkmModule,
		AuthModule,
		StudentModule,
		ReviewModule,

	],
})
export class AppModule {}
