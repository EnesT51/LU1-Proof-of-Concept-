import {IsNotEmpty} from "class-validator";
    
export class VkmDto {
    @IsNotEmpty()
    id: number;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    shortdescription: string;
    @IsNotEmpty()
    content: string;
    @IsNotEmpty()
    location: string;
    @IsNotEmpty()
    studycredit: number;
    @IsNotEmpty()
    level: string;
    @IsNotEmpty()
    learningoutcomes: string;

}