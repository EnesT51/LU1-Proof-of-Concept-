import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, catchError, scheduled, asyncScheduler } from "rxjs";
import { environment } from "../../../../environments/env.dev";
import { Review } from "../../../core/models/review.model";
import { SubmitReview } from "../../../core/models/submit.review.model";


@Injectable({
    providedIn: 'root'
})
export class ReviewService {
    private apiUrl = `${environment.apiUrl}/review`;

    constructor(private http: HttpClient) { }

    getReviews(moduleId: string): Observable<Review[]> {
        return this.http.get<Review[]>(`${this.apiUrl}/${moduleId}`, {withCredentials: true}).pipe(
            map((response: Review[]) => response),
            catchError(this.handleError)
        );
    }
    submitReview(review: SubmitReview): Observable<{message: string, data: Review}> {
        return this.http.post<{message: string, data: Review}>(`${this.apiUrl}`, review, {withCredentials: true}).pipe(
            map(response => response),
            catchError(this.handleError)
        );
    }

    mapSubmitReview(reviewText: string, rating: number, moduleId: string): SubmitReview {
        return {
            moduleId: moduleId,
            comment: reviewText,
            rating: rating
        };
    }

    private handleError(error: any) {
    let errorMessage = error.message || "Een onbekende fout is opgetreden";
    console.error("Een fout is opgetreden:", errorMessage);
    return scheduled([error], asyncScheduler);
    }
}