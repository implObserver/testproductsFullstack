import asyncHandler from 'express-async-handler';

const get_product = asyncHandler(async (req, res, next) => {
  res.json({ message: 'product' });
});

const get_products = asyncHandler(async (req, res, next) => {
  res.json({ message: 'products' });
});

export const getController = {
  get_product,
};
