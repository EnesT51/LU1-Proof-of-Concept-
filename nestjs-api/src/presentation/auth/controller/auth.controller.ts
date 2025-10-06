import { AuthService } from "src/application/auth/services/auth.service";
import { Body, Controller, Post, Res } from "@nestjs/common";
import { CreateStudentDto } from "../Dto/create.student.dto";
import { LoginStudentDto } from "../Dto/login.student.dto";
import { StudentResponseDto } from "../Dto/student.response.dto";
import type { Response } from "express";
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
    async login(@Body() loginStudentDto: LoginStudentDto, @Res({ passthrough: true }) res: Response): Promise<{ message: string }> {
        const result = await this.authService.login(loginStudentDto);
        res.cookie('token', result, { httpOnly: true, sameSite: 'strict', secure: true, maxAge: 3600000 });  // met rekenmachine berekend (24 * 60 * 60 * 1000) = 3600000 ms = 1 uur
        return { message: 'Inloggen gelukt' };
    }
    @Post('logout')
    async logout(@Res({ passthrough: true }) res: Response): Promise<{ message: string }> {
        res.clearCookie('token');
        return { message: 'Uitloggen gelukt' };
    }
}