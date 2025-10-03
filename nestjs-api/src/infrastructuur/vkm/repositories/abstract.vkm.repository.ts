import { IVkmRepository } from "src/core/vkm/interface/vkm.irepository";
import { VkmModule } from "src/core/vkm/entities/vkm.entitie";


export abstract class AbstractVkmRepository implements IVkmRepository {

    abstract getAll(): Promise<VkmModule[]>;
}