import { ObjectId } from 'mongodb';

interface Awards {
  wins: number;
  nominations: number;
  text: string;
}

interface Imdb {
  rating: number;
  votes: number;
  id: number;
}

export interface Movie {
  _id?: ObjectId;
  plot: string;
  genres: string[];
  runtime: number;
  cast: string[];
  poster: string;
  title: string;
  fullplot: string;
  languages: string[];
  released: Date;
  directors: string[];
  writers: string[];
  awards: Awards;
  lastupdated: string | Date;
  year: number;
  imdb: Imdb;
  countries: string[];
  type: string;
}
