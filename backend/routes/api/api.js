import { Router } from 'express';
import { productRouter } from './components/product.js';
export const apiRouter = Router();

apiRouter.use('/api', productRouter);