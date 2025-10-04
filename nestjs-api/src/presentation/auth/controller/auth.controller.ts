import { AuthService } from "src/application/auth/services/auth.service";
import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { CreateStudentDto } from "../Dto/create.student.dto";
import { LoginStudentDto } from "../Dto/login.student.dto";
import { StudentResponseDto } from "../Dto/student.response.dto";
import { AllowAnonymous } from "../authguard/allowanonymous.decoder";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @AllowAnonymous()
    @Post('register')
    async register(@Body() createStudentDto: CreateStudentDto): Promise<StudentResponseDto> {
        const student = await this.authService.register(createStudentDto);
        return new StudentResponseDto(student.id, student.email, student.username, student.name, student.birthDate);
    }
    @AllowAnonymous()
    @Post('login')
    async login(@Body() loginStudentDto: LoginStudentDto): Promise<{ access_token: string }> {
        const result = await this.authService.login(loginStudentDto);
        return { access_token: result };
    }
}