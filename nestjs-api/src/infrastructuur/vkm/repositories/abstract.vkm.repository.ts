import { IVkmRepository } from "src/core/vkm/interface/vkm.irepository";
import { VkmModule } from "src/core/vkm/entities/vkm.entitie";


export abstract class AbstractVkmRepository{

    abstract getAll(): Promise<VkmModule[]>;
    abstract getOne(id: string): Promise<VkmModule | null>;
}