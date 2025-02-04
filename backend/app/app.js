import express from 'express';
import { useDevMiddlewares } from './use/index.js';
import { prismaDB } from '../prisma/queries/queries.js';
import { importBrands } from '../importProducts.js';

export const app = express();
useDevMiddlewares();
//importBrands()
//prismaDB.dropAllBrands();