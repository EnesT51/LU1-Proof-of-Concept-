import { ObjectId } from 'mongodb';

export interface Review {
  _id: ObjectId;
  moduleId: string;
  studentId: string;
  userName: string;
  comment: string;
  rating: number;
  createdAt: Date;
}