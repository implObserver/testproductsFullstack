import { brandQueries } from './brands/queries.js';
import { productQueries } from './product/queries.js';

export const prismaDB = {
  ...productQueries,
  ...brandQueries,
};
