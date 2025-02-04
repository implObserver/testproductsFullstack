import { Router } from 'express';
import { productRouter } from './components/product.js';
import { brandRouter } from './components/brand.js';
export const apiRouter = Router();

apiRouter.use('/api', productRouter, brandRouter);