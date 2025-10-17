import { StudentService } from "src/application/student/services/student.service";
import { Controller, Get, HttpCode, Post, HttpStatus, Param, Req } from "@nestjs/common";
import { AuthGuard } from "src/presentation/auth/authguard/auth.guard";
import { UseGuards } from "@nestjs/common";
import { VkmModule } from "src/presentation/vkm/module/vkm.module";

@Controller("student")
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Post("/modules/:moduleId")
    @HttpCode(HttpStatus.CREATED)
    @UseGuards(AuthGuard)
    async addModuleToStudent(@Param("moduleId") moduleId: string, @Req() req: any): Promise<{ message: string }> {
        const studentId = req.user.id;
        return await this.studentService.addModuleToStudent(studentId, moduleId);
    }
    @Get()
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    async getStudentModules(@Req() req: any): Promise<VkmModule[]> {
        const studentId = req.user.id;
        return await this.studentService.getStudentModules(studentId);
    }
}