import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {logger: ['log', 'error', 'warn', 'debug', 'verbose']});
    app.setGlobalPrefix('api');
    app.use(cookieParser());

    app.useGlobalPipes(new ValidationPipe({ 
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
        forbidUnknownValues: true,
        exceptionFactory: (errors) => {
            const errorObject: Record<string, string> = {};
            errors.forEach(err => {
                const firstmessage = Object.values(err.constraints || {})[0];
                errorObject[err.property] = firstmessage;
            });
            return new BadRequestException(errorObject);
        }
    }));

    if (process.env.PRODUCTION === 'true') {
        app.enableCors({origin: process.env.ORIGIN, credentials: true});
    }else {
        app.enableCors({origin: 'http://localhost:4200', credentials: true});
    }
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
