import { Review } from "../entities/review.entitie";

export abstract class AbstractReviewRepository {
    abstract createReview(reviewData: Review): Promise<Review>;
    abstract getReviews(moduleId: string): Promise<Review[]>;
}