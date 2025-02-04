import { brandController } from '../../../controllers/brand/index.js';
import { Router } from 'express';
export const brandRouter = Router();

brandRouter.get('/brands', brandController.get_brands);
