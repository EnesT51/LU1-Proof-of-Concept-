
export abstract class AbstractStudentRepository {
    abstract addModuleToStudent(studentId: string, moduleId: string): Promise<boolean>;
    abstract getStudentModules(studentId: string): Promise<any[]>;
}