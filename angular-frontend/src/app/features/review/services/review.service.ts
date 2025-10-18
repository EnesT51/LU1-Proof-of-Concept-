import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, catchError } from "rxjs";
import { environment } from "../../../../environments/env.dev";
import { Review } from "../../../core/models/review.model";
import { SubmitReview } from "../../../core/models/submit.review.model";
import { handleError } from "../../../core/utils/error-mapper.utils";


@Injectable({
    providedIn: 'root'
})
export class ReviewService {
    private apiUrl = `${environment.apiUrl}/review`;

    errorObject: { comment?: string; rating?: string } = {};

    constructor(private http: HttpClient) { }

    getReviews(moduleId: string): Observable<Review[]> {
        return this.http.get<Review[]>(`${this.apiUrl}/${moduleId}`, {withCredentials: true}).pipe(
            map((response: Review[]) => response),
            catchError((err) => handleError(err))
        );
    }
    submitReview(review: SubmitReview): Observable<{message: string, data: Review}> {
        console.log('Submitting review:', review);
        return this.http.post<{message: string, data: Review}>(`${this.apiUrl}`, review, {withCredentials: true}).pipe(
            map((response: {message: string, data: Review}) => response),
            catchError((err) => handleError(err))
        );
    }

    mapSubmitReview(reviewText: string, rating: number, moduleId: string): SubmitReview {
        return {
            moduleId: moduleId,
            comment: reviewText,
            rating: rating
        };
    }

    cleanErrorObject() {
        this.errorObject = {};
    }
}