import { Component, input, signal } from "@angular/core";
import { Review } from "../../core/models/review.model";
import { ReviewService } from "./services/review.service";
import { SubmitReview } from "../../core/models/submit.review.model";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    standalone: true,
})
export class ReviewComponent {

    constructor(private reviewService: ReviewService, private route: ActivatedRoute) {}
    moduleId = signal<string>('');
    reviewText = signal('');
    rating = signal<number | null>(null);
    reviews = signal<Review[]>([]);
    isLoading = signal(false);
    isSubmitting = signal(false);

    ngOnInit() {
        const moduleId = this.route.snapshot.paramMap.get('moduleId');
        if (!moduleId) {
            return;
        }
        this.moduleId.set(moduleId);
        this.loadReviews();
    }

    loadReviews() {
        this.isLoading.set(true);
        this.reviewService.getReviews(this.moduleId()).subscribe({
            next: (reviews) => {
                this.reviews.set(reviews);
                this.isLoading.set(false);
            },
            error: () => this.isLoading.set(false)
        });
    }
    onSubmitReview() {
        if(!this.reviewText() || !this.rating()) {
            return;
        }
        const submitReview = this.reviewService.mapSubmitReview(this.reviewText(), Number(this.rating())!, this.moduleId());
        this.isSubmitting.set(true);
        this.reviewService.submitReview(submitReview).subscribe({
            next: (data) => {
                this.resetForm();
                this.reviews.update(currentReviews => [data.data, ...currentReviews]);
                this.isSubmitting.set(false);
            },
            error: () => this.isSubmitting.set(false)
        });
    }
    private resetForm() {
        this.reviewText.set('');
        this.rating.set(null);
    }
}
