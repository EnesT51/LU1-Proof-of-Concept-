import {Router, Request, Response} from 'express';

import { MovieController } from '../controllers/MovieController';
import { MovieService } from '../../core/services/MovieService';
import { MovieRepository } from '../../infrastructure/Repositories/MovieRepository';

const router = Router();

const movieRepository = new MovieRepository();
const movieService = new MovieService(movieRepository);
const movieController = new MovieController(movieService);

router.get('/home', (req: Request, res: Response) => movieController.getAllMovies(req, res));

export default router;