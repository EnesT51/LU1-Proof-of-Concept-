import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";

export class LoginStudentDto {
    @IsEmail({},{ message: 'Ongeldig e-mailadres' })
    @IsNotEmpty()
    email: string;

    @IsNotEmpty({ message: 'Wachtwoord is verplicht' })
    @Length(6, 30)
    password: string;
}
