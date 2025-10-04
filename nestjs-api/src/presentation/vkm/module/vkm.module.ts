import { Module } from "@nestjs/common";
import { VkmController } from "../controller/vkm.controller";
import { VkmService } from "../../../application/vkm/services/vkm.service";
import { AbstractVkmRepository } from "../../../infrastructuur/vkm/repositories/abstract.vkm.repository";
import { VkmRepository } from "../../../infrastructuur/vkm/repositories/vkm.repository";
import { DatabaseModule } from "../../../infrastructuur/database/db.module";
import { AuthGuard } from "src/presentation/auth/authguard/auth.guard";
import { AuthModule } from "src/presentation/auth/module/auth.module";
@Module({
    imports: [DatabaseModule, AuthModule],
    controllers: [VkmController],
    providers: [
        VkmService,
        {
            provide: AbstractVkmRepository,
            useClass: VkmRepository,
        },
    ],
})
export class VkmModule {}