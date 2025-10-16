import { Injectable, Inject } from "@nestjs/common";
import { Db, ObjectId } from "mongodb";
import { AbstractStudentRepository } from "src/core/student/contract/abstract.student.repository";

@Injectable()
export class StudentRepository extends AbstractStudentRepository {
    constructor(@Inject("DATABASE_CONNECTION") private readonly db: Db) {
        super();
    }
    async addModuleToStudent(studentId: string, moduleId: string): Promise<boolean> {
        const result = await this.db.collection("student").updateOne(
            { _id: new ObjectId(studentId) },
            { $addToSet: { modules: moduleId } }
        );
        return result.modifiedCount > 0;
    }
    async getStudentModules(studentId: string): Promise<any[]> {

        const student = await this.findStudentById(studentId);
        if (!student) {
            return [];
        }
        const moduleIds = (student.modules || []).map((id: string) => new ObjectId(id));
        return this.db.collection("vkm").find({ _id: { $in: moduleIds } }).toArray();
    }

    private async findStudentById(studentId: string) {
        return await this.db.collection("student").findOne({ _id: new ObjectId(studentId) });
    }
}