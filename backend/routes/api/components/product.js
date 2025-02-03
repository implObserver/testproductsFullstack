import { productController } from '../../../controllers/product/index.js';
import { Router } from 'express';
export const productRouter = Router();

productRouter.get('/posts', productController.get_product);
