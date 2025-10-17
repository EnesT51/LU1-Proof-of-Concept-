import { Module } from "@nestjs/common";
import { ReviewController } from "../controller/review.controller";
import { ReviewService } from "src/application/review/services/review.service";
import { ReviewRepository } from "src/infrastructuur/review/repositories/review.repository";
import { AbstractReviewRepository } from "src/core/review/contract/abstract.review.repository";
import { DatabaseModule } from "src/infrastructuur/database/db.module";
import { AuthModule } from "src/presentation/auth/module/auth.module";

@Module({
    controllers: [ReviewController],
    imports: [DatabaseModule, AuthModule],
    providers: [
        ReviewService,
        {
            provide: AbstractReviewRepository,
            useClass: ReviewRepository,
        },
    ],
})
export class ReviewModule {}
