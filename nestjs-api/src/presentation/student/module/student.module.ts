import { Module } from "@nestjs/common";
import { StudentController } from "../controller/student.controller";
import { StudentService } from "src/application/student/services/student.service";
import { AbstractStudentRepository } from "src/core/student/contract/abstract.student.repository";
import { StudentRepository } from "src/infrastructuur/student/repositories/student.repository";
import { DatabaseModule } from "src/infrastructuur/database/db.module";
import { AuthModule } from "src/presentation/auth/module/auth.module";

@Module({
    imports: [DatabaseModule, AuthModule],
    controllers: [StudentController],
    providers: [
        StudentService,
        {
            provide: AbstractStudentRepository,
            useClass: StudentRepository,
        },
    ],
    exports: [StudentService, AbstractStudentRepository],
})
export class StudentModule {}