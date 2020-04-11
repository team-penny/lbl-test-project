import { Router } from 'express';
import * as handlers from './handlers';

export const router = Router();
// GET request for retrieving all projects
router.get(
    '/project',
    handlers.getAllProjects
);
