import { Module } from '@nestjs/common';
import { AuthController } from '../controller/auth.controller';
import { AuthService } from 'src/application/auth/services/auth.service';
import { AbstractAuthRepository } from 'src/core/auth/contract/auth.abstract.repository';
import { BcryptHashingService } from 'src/infrastructuur/auth/security/service/bcrypt.hashing.service';
import { AuthRepository } from 'src/infrastructuur/auth/repositories/auth.repository';
import { AbstractHashingService } from 'src/core/auth/security/contract/abstract.hashing.service';
import { DatabaseModule } from 'src/infrastructuur/database/db.module';
import { JwtTokenService } from 'src/infrastructuur/auth/security/service/jwt.token.service';
import { AbstractTokenService } from 'src/core/auth/security/contract/abstract.token.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from '../authguard/auth.guard';
import { Reflector } from '@nestjs/core';

@Module({
    imports: [DatabaseModule, JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '1h' },
    })],
    controllers: [AuthController],
    providers: [AuthService, AuthGuard, Reflector,
        {
            provide: AbstractAuthRepository,
            useClass: AuthRepository,
        },
        {
            provide: AbstractHashingService,
            useClass: BcryptHashingService,
        },
        {
            provide: AbstractTokenService,
            useClass: JwtTokenService,
        },
    ],
    exports: [AbstractTokenService, AuthGuard],
})
export class AuthModule {}