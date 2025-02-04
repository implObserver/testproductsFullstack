import asyncHandler from 'express-async-handler';
import { prismaDB } from '../../../../prisma/queries/queries.js';
import {
  buildFilters,
  buildSorting,
  buildPagination,
} from '../../helper/builders.js';

const get_product = asyncHandler(async (req, res, next) => {
  res.json({ message: 'product' });
});

const get_pagination_products = asyncHandler(async (req, res) => {
  const filters = buildFilters(req.query);
  const orderBy = buildSorting(req.query);
  const { offset, limit } = buildPagination(req.query);

  try {
    const products = await prismaDB.getPaginationProducts(
      offset,
      limit,
      filters,
      orderBy
    );
    const totalProducts = await prismaDB.countProducts(filters);
    const totalPages = Math.max(1, Math.ceil(totalProducts / limit));

    res.json({ products, totalProducts, totalPages });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Ошибка при получении продуктов' });
  }
});

export const getController = {
  get_product,
  get_pagination_products,
};
