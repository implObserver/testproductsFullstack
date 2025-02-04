import { productController } from '../../../controllers/product/index.js';
import { Router } from 'express';
export const productRouter = Router();

productRouter.get('/products', productController.get_pagination_products);
