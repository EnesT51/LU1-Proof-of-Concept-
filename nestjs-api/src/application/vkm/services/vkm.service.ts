import { VkmModule } from "src/core/vkm/entities/vkm.entitie";
import { AbstractVkmRepository } from "../../../infrastructuur/vkm/repositories/abstract.vkm.repository";
import { Injectable } from "@nestjs/common";


@Injectable()
export class VkmService {
    constructor(private readonly vkmRepository: AbstractVkmRepository) {}

    async getAll(): Promise<VkmModule[]> {
        try{
            return this.vkmRepository.getAll();
        } catch (error) {
            throw error;
        }
    }
    async getOne(id: string): Promise<VkmModule | null> {
        try{
            return this.vkmRepository.getOne(id);
        } catch (error) {
            throw error;
        }
    }
}