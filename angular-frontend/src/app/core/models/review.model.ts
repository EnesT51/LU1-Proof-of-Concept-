
export interface Review {
    _id: string;
    comment: string;
    rating: number;
    moduleId: string;
    username: string;
    createdAt?: string;
}