import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { VkmService } from "../../../application/vkm/services/vkm.service";
import { VkmModule } from "src/core/vkm/entities/vkm.entitie";
import { VkmDto } from "../Dto/vkm.dto";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/presentation/auth/authguard/auth.guard";

@Controller('vkm')
export class VkmController {
    constructor(private readonly vkmService: VkmService) {}

    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @Get()
    async findAll(): Promise<VkmDto[]> {
        return this.vkmService.getAll();
    }
}