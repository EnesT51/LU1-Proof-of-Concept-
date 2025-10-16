import { AbstractStudentRepository } from "src/core/student/contract/abstract.student.repository";
import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from "@nestjs/common";
import e from "express";

@Injectable()
export class StudentService {
    constructor(private readonly studentRepository: AbstractStudentRepository) {}

    async addModuleToStudent(studentId: string, moduleId: string): Promise<{ message: string }> {
        this.validateInput(studentId, moduleId);
        try {
            const result = await this.studentRepository.addModuleToStudent(studentId, moduleId);
            if (!result) {
                throw new ConflictException("Module is al toegevoegd aan student");
            }
            return { message: "Module succesvol toegevoegd aan student" };
        } catch (error) {
            if (error instanceof ConflictException) {
                throw error;
            }
            throw new InternalServerErrorException("Error bij toevoegen module aan student");
        }
    }
    async getStudentModules(studentId: string): Promise<any[]> {
        if (!studentId) {
            throw new BadRequestException("Student ID is verplicht");
        }
        return await this.studentRepository.getStudentModules(studentId);
    }

    private validateInput(studentId: string, moduleId: string) {
        if (!studentId || !moduleId) {
            throw new BadRequestException(`Student ID en Module ID zijn verplicht {studentId: ${studentId}, moduleId: ${moduleId}}`);
        }
    }
}