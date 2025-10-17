import { VkmModule } from "../entities/vkm.entitie";


export interface IVkmRepository {
    getAll(): Promise<VkmModule[]>;
    getOne(id: string): Promise<VkmModule>;
}