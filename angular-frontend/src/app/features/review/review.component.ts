import { Component, input, signal } from "@angular/core";
import { Review } from "../../core/models/review.model";
import { ReviewService } from "./services/review.service";
import { ActivatedRoute } from "@angular/router";
import { AlertService } from "../../core/services/alert.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    standalone: true,
    imports: [CommonModule, FormsModule],
})
export class ReviewComponent {

    constructor(public reviewService: ReviewService, private route: ActivatedRoute, private alertService: AlertService) {
        this.reviewService.cleanErrorObject();
    }
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
        const submitReview = this.reviewService.mapSubmitReview(this.reviewText(), Number(this.rating())!, this.moduleId());
        this.isSubmitting.set(true);
        this.reviewService.submitReview(submitReview).subscribe({
            next: (data) => {
                this.alertService.show(data.message, 'success');
                this.resetForm();
                this.reviews.update(currentReviews => [data.data, ...currentReviews]);
                this.reviewService.cleanErrorObject();
                this.isSubmitting.set(false);
            },
            error: (err) => {
                this.isSubmitting.set(false);
                this.reviewService.errorObject = err;
            }
        });
    }
    private resetForm() {
        this.reviewText.set('');
        this.rating.set(null);
    }
}
