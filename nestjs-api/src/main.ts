import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {logger: ['log', 'error', 'warn', 'debug', 'verbose']});
    app.setGlobalPrefix('api');
    app.use(cookieParser());

    app.useGlobalPipes(new ValidationPipe({ 
        whitelist: true, 
        forbidNonWhitelisted: true , 
        forbidUnknownValues: true}));
    app.enableCors({origin: 'http://localhost:4200', credentials: true});
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
