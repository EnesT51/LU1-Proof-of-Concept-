import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { Review } from "src/core/review/entities/review.entitie";
import { CreateReviewDTO } from "src/application/review/dto/create.review.dto";
import { AbstractReviewRepository } from "src/core/review/contract/abstract.review.repository";
import { ReviewDTO } from "src/application/review/dto/review.dto";
import { ObjectId } from "mongodb";

@Injectable()
export class ReviewService {

    constructor(private readonly reviewRepository: AbstractReviewRepository) {}
    
    async createReview(reviewData: CreateReviewDTO, username: string, studentId: string): Promise<ReviewDTO> {
        if (!reviewData) {
            throw new BadRequestException("Ongeldige review data");
        }
        try {
            const review: Review = {
                _id: new ObjectId(),
                moduleId: reviewData.moduleId,
                userName: username,
                studentId: studentId,
                comment: reviewData.comment,
                rating: reviewData.rating,
                createdAt: new Date(),
            };
            const createdReview = await this.reviewRepository.createReview(review);
            if (!createdReview) {
                throw new ConflictException("Review kon niet worden aangemaakt");
            }
            const reviewDTO = new ReviewDTO(
                createdReview._id.toHexString(),
                createdReview.userName,
                createdReview.comment,
                createdReview.rating,
                createdReview.createdAt,
            );
            return reviewDTO;
        } catch (error) {
            if (error instanceof ConflictException) {
                throw error;
            }
            throw new InternalServerErrorException("Er is een fout opgetreden bij het aanmaken van de review");
        }
    }

    async getReviews(moduleId: string, studentId: string): Promise<ReviewDTO[]> {
        if (!moduleId || !studentId) {
            throw new BadRequestException("Ongeldige module ID of student ID");
        }
        try {
            const reviews = await this.reviewRepository.getReviews(moduleId);
            if (!reviews) {
                throw new NotFoundException("Geen reviews gevonden");
            }
            const reviewDTOs: ReviewDTO[] = reviews.map(review => new ReviewDTO(
                review._id.toString(),
                review.userName,
                review.comment,
                review.rating,
                review.createdAt,
            ));
            return reviewDTOs;
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new InternalServerErrorException("Er is een fout opgetreden bij het ophalen van reviews");
        }
    }
}
