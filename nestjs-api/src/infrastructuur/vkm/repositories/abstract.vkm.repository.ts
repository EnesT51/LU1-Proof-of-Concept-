import { VkmModule } from "src/core/vkm/entities/vkm.entitie";


export abstract class AbstractVkmRepository{

    abstract getAll(): Promise<VkmModule[]>;
    abstract getOne(id: string): Promise<VkmModule | null>;
}