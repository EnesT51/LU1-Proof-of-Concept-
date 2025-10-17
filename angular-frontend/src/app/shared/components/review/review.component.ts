import { Component, input } from "@angular/core";
import { VKMModule } from "../../models/vkm.model";

@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    standalone: true,
})
export class ReviewComponent {

    moduleId = input<string>();
    reviewText = '';
    rating: number | null = null;

    onSubmitReview() {
    }
}
