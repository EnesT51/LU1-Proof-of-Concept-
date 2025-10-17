import { Component } from "@angular/core";

@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    standalone: true,
})
export class ReviewComponent {
    moduleId = '';
    reviewText = '';
    rating: number | null = null;

    onSubmitReview() {
    }
}
