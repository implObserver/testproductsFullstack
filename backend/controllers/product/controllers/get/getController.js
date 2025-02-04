import asyncHandler from 'express-async-handler';
import { prismaDB } from '../../../../prisma/queries/queries.js';

const get_product = asyncHandler(async (req, res, next) => {
  res.json({ message: 'product' });
});

const get_pagination_products = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1; // Текущая страница
  const limit = 20; // Количество продуктов на странице
  const offset = (page - 1) * limit; // Смещение для базы данных

  const { brand, priceMin, priceMax, search, sortBy, sortOrder } = req.query;

  // Формируем объект фильтрации
  const filters = {};

  if (brand) {
    filters.brand = brand; // Фильтр по бренду (строгое совпадение)
  }

  if (priceMin || priceMax) {
    filters.price = {};
    if (priceMin) filters.price.gte = parseFloat(priceMin); // Минимальная цена
    if (priceMax) filters.price.lte = parseFloat(priceMax); // Максимальная цена
  }

  if (search) {
    filters.name = { contains: search, mode: 'insensitive' }; // Поиск по названию
  }

  // **Сортировка**
  const validSortFields = ['name', 'price', 'createdAt']; // Допустимые поля
  const validOrders = ['asc', 'desc'];

  const orderBy = validSortFields.includes(sortBy)
    ? { [sortBy]: validOrders.includes(sortOrder) ? sortOrder : 'asc' }
    : { createdAt: 'desc' }; // Сортируем по `createdAt`, если параметр не указан

  try {
    const products = await prismaDB.getPaginationProducts(
      offset,
      limit,
      filters,
      orderBy
    );
    const totalProducts = await prismaDB.countProducts(filters);
    const totalPages = Math.max(1, Math.ceil(totalProducts / limit));

    res.json({
      products,
      totalProducts,
      totalPages: totalPages,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Ошибка при получении продуктов' });
  }
});

//const filter_products_by_brand

export const getController = {
  get_product,
  get_pagination_products,
};
