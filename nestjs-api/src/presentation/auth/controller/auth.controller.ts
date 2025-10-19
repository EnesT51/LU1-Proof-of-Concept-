import { AuthService } from "src/application/auth/services/auth.service";
import { Body, Controller, Get, Post, Req, Res, UseGuards } from "@nestjs/common";
import { CreateStudentDto } from "../../../application/auth/Dto/create.student.dto";
import { LoginStudentDto } from "../../../application/auth/Dto/login.student.dto";
import type { Response } from "express";
import { AllowAnonymous } from "../authguard/allowanonymous.decoder";
import { AuthGuard } from "../authguard/auth.guard";
import { HttpCode } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @AllowAnonymous()
    @HttpCode(HttpStatus.CREATED)
    @Post('register')
    async register(@Body() createStudentDto: CreateStudentDto): Promise<{ success: boolean; message: string }> {
        await this.authService.register(createStudentDto);
        return { success: true, message: 'Registreren gelukt' };
    }
    @AllowAnonymous()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginStudentDto: LoginStudentDto, @Res({ passthrough: true }) res: Response): Promise<{ success: boolean; message: string }> {
        const result = await this.authService.login(loginStudentDto);
        res.cookie('token', result, { httpOnly: true, sameSite: 'none', secure: true, maxAge: 3600000 });  // met rekenmachine berekend (24 * 60 * 60 * 1000) = 3600000 ms = 1 uur
        return { success: true, message: 'Inloggen gelukt' };
    }
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('logout')
    async logout(@Res({ passthrough: true }) res: Response): Promise<{ success: boolean; message: string }> {
        res.clearCookie('token', { httpOnly: true, sameSite: 'none', secure: true, path: '/' });
        return { success: true, message: 'Uitloggen gelukt' };
    }

    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    @Get('user')
    async getUser(@Req() req: any): Promise<any> {
        const user = req.user; // Haal de gebruiker op uit het request object dat door de AuthGuard is toegevoegd
        return { user, success: true, message: 'Gebruiker opgehaald'};
    }
}