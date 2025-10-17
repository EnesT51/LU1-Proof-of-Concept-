import { IsString, IsNumber, Min, Max } from "class-validator";

export class CreateReviewDTO {

    @IsString()
    moduleId: string;

    @IsString()
    comment: string;

    @IsNumber()
    @Min(1)
    @Max(5)
    rating: number;
}