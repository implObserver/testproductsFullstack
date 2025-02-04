import { prisma } from '../../getClient.js';

const getPaginationProducts = async (offset, limit, filters, orderBy) => {
  console.log(offset, limit, filters, orderBy);

  // Если filters === 'none', игнорируем фильтрацию
  const whereClause = filters === 'none' ? {} : filters;

  // Если orderBy === 'none', игнорируем сортировку
  const orderByClause = orderBy === 'none' ? {} : orderBy;

  return prisma.product.findMany({
    where: whereClause, // Применяем фильтры, если они есть
    orderBy: orderByClause, // Применяем сортировку, если она есть
    skip: offset, // Пропускаем указанное количество записей
    take: limit, // Ограничиваем количество возвращаемых записей
  });
};

const countProducts = async (filters) => {
  return await prisma.product.count({
    where: filters,
  });
};

const dropAllProducts = async () => {
  await prisma.product.deleteMany({});
}

export const productQueries = {
  getPaginationProducts,
  countProducts,
  dropAllProducts
};
