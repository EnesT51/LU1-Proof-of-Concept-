import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from './presentation/auth/authguard/auth.guard';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {logger: ['log', 'error', 'warn', 'debug', 'verbose']});
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe({ 
        whitelist: true, 
        forbidNonWhitelisted: true , 
        forbidUnknownValues: true}));
    app.enableCors({origin: 'http://localhost:4200'});
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
