import {IsEmail, IsString, MinLength, MaxLength, IsDateString, IsNotEmpty, Matches} from "class-validator";


export class CreateStudentDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(30)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, { message: 'Wachtwoord moet minimaal één hoofdletter, één kleine letter en één cijfer bevatten' })
    password: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(30)
    surname: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name: string;

    @IsDateString()
    @IsNotEmpty()
    birthDate: Date;
}