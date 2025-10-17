import { VkmModule } from "src/core/vkm/entities/vkm.entitie";
import { AbstractVkmRepository } from "../../../infrastructuur/vkm/repositories/abstract.vkm.repository";
import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from "@nestjs/common";



@Injectable()
export class VkmService {
    constructor(private readonly vkmRepository: AbstractVkmRepository) {}

    async getAll(): Promise<VkmModule[]> {
        try{
           const vkmModules = await this.vkmRepository.getAll();
           if(!vkmModules){
            throw new NotFoundException("Geen VKM modules gevonden");
           }
           return vkmModules;
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new InternalServerErrorException("Er is een fout opgetreden");
        }
    }
    async getOne(id: string): Promise<VkmModule | null> {
        if (!id) {
            throw new BadRequestException("Ongeldig ID");
        }
        try{
            const vkmModule = await this.vkmRepository.getOne(id);
            if (!vkmModule) {
                throw new NotFoundException("VKM module niet gevonden");
            }
            return vkmModule;
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new InternalServerErrorException("Er is een fout opgetreden");
        }
    }
}