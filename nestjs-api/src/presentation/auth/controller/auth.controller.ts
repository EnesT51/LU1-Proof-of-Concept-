import { AuthService } from "src/application/auth/services/auth.service";
import { Body, Controller, Post } from "@nestjs/common";
import { CreateStudentDto } from "../Dto/create.student.dto";
import { LoginStudentDto } from "../Dto/login.student.dto";
import { StudentResponseDto } from "../Dto/student.response.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() createStudentDto: CreateStudentDto): Promise<StudentResponseDto> {
        const student = await this.authService.register(createStudentDto);
        return new StudentResponseDto(student.id, student.email, student.username, student.name, student.birthDate);
    }
    @Post('login')
    async login(@Body() loginStudentDto: LoginStudentDto): Promise<StudentResponseDto> {
        const student = await this.authService.login(loginStudentDto);
        return new StudentResponseDto(student.id, student.email, student.username, student.name, student.birthDate);
    }
}