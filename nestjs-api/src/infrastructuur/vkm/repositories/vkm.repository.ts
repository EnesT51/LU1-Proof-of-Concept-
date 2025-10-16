import { Inject, Injectable } from "@nestjs/common";
import { AbstractVkmRepository } from "./abstract.vkm.repository";
import { VkmModule } from "src/core/vkm/entities/vkm.entitie";
import { Db, ObjectId } from "mongodb";

@Injectable()
export class VkmRepository extends AbstractVkmRepository {

    constructor(@Inject("DATABASE_CONNECTION") private readonly dbConnection: Db){ super();}

    async getAll(): Promise<VkmModule[]> {
        const vkmCollection = this.dbConnection.collection<VkmModule>("vkm");
        return await vkmCollection.find().toArray();
    }
    async getOne(id: string): Promise<VkmModule | null> {
        const vkmCollection = this.dbConnection.collection<VkmModule>("vkm");
        return await vkmCollection.findOne({ _id: new ObjectId(id) });
    }
}