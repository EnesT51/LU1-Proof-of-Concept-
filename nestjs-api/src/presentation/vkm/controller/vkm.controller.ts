import { Controller, Get, HttpCode, HttpStatus, Param } from "@nestjs/common";
import { VkmService } from "../../../application/vkm/services/vkm.service";
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
        return await this.vkmService.getAll();
    }
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<VkmDto | null> {
        return await this.vkmService.getOne(id);
    }
}