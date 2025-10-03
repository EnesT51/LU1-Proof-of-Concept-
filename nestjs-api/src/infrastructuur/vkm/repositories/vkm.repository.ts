import { Inject, Injectable } from "@nestjs/common";
import { AbstractVkmRepository } from "./abstract.vkm.repository";
import { VkmModule } from "src/core/vkm/entities/vkm.entitie";
import { Db } from "mongodb";
import e from "express";

@Injectable()
export class VkmRepository extends AbstractVkmRepository {

    constructor(@Inject("DATABASE_CONNECTION") private readonly dbConnection: Db){ super();}

    async getAll(): Promise<VkmModule[]> {
        const vkmCollection = this.dbConnection.collection<VkmModule>("vkm");
        return vkmCollection.find().toArray();
    }
}