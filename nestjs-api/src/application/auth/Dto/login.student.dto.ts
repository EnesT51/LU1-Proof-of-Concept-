import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";

export class LoginStudentDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @Length(6, 30)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, { message: 'Wachtwoord moet minimaal één hoofdletter, één kleine letter en één cijfer bevatten' })
    password: string;
}
