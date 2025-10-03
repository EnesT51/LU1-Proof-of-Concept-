import {IsEmail, IsString, MinLength, MaxLength, IsDateString, IsNotEmpty} from "class-validator";


export class CreateStudentDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(30)
    password: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(30)
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name: string;

    @IsDateString()
    @IsNotEmpty()
    birthDate: Date;
}