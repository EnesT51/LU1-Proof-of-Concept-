import { Controller, Get, HttpCode, Post, HttpStatus, Param, Req, Body } from "@nestjs/common";
import { AuthGuard } from "src/presentation/auth/authguard/auth.guard";
import { UseGuards } from "@nestjs/common";
import { CreateReviewDTO } from "../../../application/review/dto/create.review.dto";
import { ReviewService } from "src/application/review/services/review.service";
import { ReviewDTO } from "src/application/review/dto/review.dto";


@Controller("review")
export class ReviewController {

    constructor(private readonly reviewService: ReviewService) {}
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @UseGuards(AuthGuard)
    async createReview(@Body() createReviewDTO: CreateReviewDTO, @Req() req: any): Promise<{ message: string, data: ReviewDTO }> {
        const createdReview = await this.reviewService.createReview(createReviewDTO, req.user.sub, req.user.id);
        return { message: "Review met succes geplaatst", data: createdReview };
    }
    @Get(":moduleId")
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    async getReviews(@Req() req: any, @Param('moduleId') moduleId: string): Promise<ReviewDTO[]> {
        // Logic to get reviews goes here
        const reviews: ReviewDTO[] = await this.reviewService.getReviews(moduleId, req.user.id);
        return reviews;
    }
}