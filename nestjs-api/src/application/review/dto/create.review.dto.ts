import { IsString, IsNumber, Min, Max, isNotEmpty, IsNotEmpty } from "class-validator";

export class CreateReviewDTO {

    @IsString()
    moduleId: string;

    @IsNotEmpty({ message: 'Deze veld is verplicht' })
    @IsString()
    comment: string;

    @IsNumber({}, { message: 'Rating moet een nummer zijn' })
    @Min(1, { message: 'Rating moet minimaal 1 zijn' })
    @Max(5, { message: 'Rating moet maximaal 5 zijn' })
    rating: number;
}