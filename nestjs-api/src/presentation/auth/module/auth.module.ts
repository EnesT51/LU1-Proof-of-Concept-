import { Module } from '@nestjs/common';
import { AuthController } from '../controller/auth.controller';
import { AuthService } from 'src/application/auth/services/auth.service';
import { AbstractAuthRepository } from 'src/core/auth/contract/auth.abstract.repository';
import { BcryptHashingService } from 'src/infrastructuur/auth/security/bcrypt.hashing.service';
import { AuthRepository } from 'src/infrastructuur/auth/repositories/auth.repository';
import { AbstractHashingService } from 'src/core/auth/security/contract/abstract.hashing.service';
import { DatabaseModule } from 'src/infrastructuur/database/db.module';

@Module({
    imports: [DatabaseModule],
    controllers: [AuthController],
    providers: [AuthService,
        {
            provide: AbstractAuthRepository,
            useClass: AuthRepository,
        },
        {
            provide: AbstractHashingService,
            useClass: BcryptHashingService,
        }
    ],
})
export class AuthModule {}