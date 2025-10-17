export class ReviewDTO {
    _id: string;
    username: string;
    comment: string;
    rating: number;
    createdAt: Date;

    constructor(_id: string, username: string, comment: string, rating: number, createdAt: Date) {
        this._id = _id;
        this.username = username;
        this.comment = comment;
        this.rating = rating;
        this.createdAt = createdAt;
    }
}
