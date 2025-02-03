import express from 'express';
import { useDevMiddlewares } from './use/index.js';

export const app = express();

useDevMiddlewares();
