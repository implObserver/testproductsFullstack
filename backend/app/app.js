import express from 'express';
import { useDevMiddlewares } from './use/index.js';
import { prismaDB } from '../prisma/queries/queries.js';

export const app = express();
useDevMiddlewares();
//prismaDB.dropAllProducts();