import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { Student } from "src/core/auth/entities/student.entitie";
import { AbstractAuthRepository } from "src/core/auth/contract/auth.abstract.repository";
import { CreateStudentDto } from "src/presentation/auth/Dto/create.student.dto";
import { LoginStudentDto } from "src/presentation/auth/Dto/login.student.dto";
import { AbstractHashingService } from "src/core/auth/security/contract/abstract.hashing.service";


@Injectable()
export class AuthService {
    constructor(
        private readonly authRepository: AbstractAuthRepository, 
        private readonly hashingService: AbstractHashingService) {}

    async register(dto: CreateStudentDto): Promise<Student> {
        const existingStudent = await this.authRepository.findByEmail(dto.email);
        if (existingStudent) {
            throw new ConflictException("Email is al in gebruik");
        }
        try{
            dto.password = await this.hashingService.hash(dto.password);
            const student = new Student("", dto.email, dto.username, dto.password, dto.name, dto.birthDate);
            return await this.authRepository.create(student);
        } catch (error) {
            throw new InternalServerErrorException("Error bij registreren");
        }
    }
    async login(dto: LoginStudentDto): Promise<Student> {
        const student = await this.authRepository.findByEmail(dto.email);
        if (!student) {
            throw new NotFoundException("Student niet gevonden");
        }
        try{
            const isPasswordValid = await this.hashingService.compare(dto.password, student.passwordHash);
            if (!isPasswordValid) {
                throw new BadRequestException("Ongeldig wachtwoord");
            }
            return student;
        } catch (error) {
            throw new InternalServerErrorException("Error bij inloggen");
        }
    }
}

