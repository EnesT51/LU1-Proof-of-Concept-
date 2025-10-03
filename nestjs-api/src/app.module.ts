import { Module } from '@nestjs/common';
import { VkmModule } from './presentation/vkm/module/vkm.module';
import { AuthModule } from './presentation/auth/module/auth.module';

@Module({
	imports: 
	[
		VkmModule,
		AuthModule
	],
})
export class AppModule {}
