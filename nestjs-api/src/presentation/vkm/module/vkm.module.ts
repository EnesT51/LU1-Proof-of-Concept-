import { Module } from "@nestjs/common";
import { VkmController } from "../controller/vkm.controller";
import { VkmService } from "../../../application/vkm/services/vkm.service";
import { AbstractVkmRepository } from "../../../infrastructuur/vkm/repositories/abstract.vkm.repository";
import { VkmRepository } from "../../../infrastructuur/vkm/repositories/vkm.repository";
import { DatabaseModule } from "../../../infrastructuur/database/db.module";

@Module({
    imports: [DatabaseModule],
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