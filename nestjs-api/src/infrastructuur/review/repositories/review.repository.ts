import { AbstractReviewRepository } from "src/core/review/contract/abstract.review.repository";
import { Review } from "src/core/review/entities/review.entitie";
import { Injectable, Inject } from "@nestjs/common";
import { Db, InsertOneResult, ObjectId } from "mongodb";
import { CreateReviewDTO } from "src/application/review/dto/create.review.dto";

@Injectable()
export class ReviewRepository extends AbstractReviewRepository {

    constructor(@Inject('DATABASE_CONNECTION') private readonly dbConnection: Db) {
        super();
    }

    async createReview(review: Review): Promise<Review> {
        const reviewsCollection = this.dbConnection.collection<Review>('reviews');

        const newResult: Review = {
            ...review,
            createdAt: new Date(),
        }
        const result: InsertOneResult<Review> = await reviewsCollection.insertOne(newResult);
        return {...newResult, _id: result.insertedId};
    }

    async getReviews(moduleId: string): Promise<Review[]> {
        const reviewsCollection = this.dbConnection.collection<Review>('reviews');
        const reviews = await reviewsCollection.find({ moduleId: moduleId }).sort({ createdAt: -1 }).toArray();
        return reviews;
    }
}
