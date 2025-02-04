import { prisma } from '../../getClient.js';

const getPaginationProducts = async (offset, limit, filters, orderBy) => {
  console.log(offset, limit, filters, orderBy)

  /*return prisma.product.findMany({
    take: 10, // Возвращаем только первые 10 продуктовы
  });*/
  return prisma.product.findMany({
    where: filters === 'none' ? undefined : filters, // Если filters === 'none', передаем undefined
    orderBy: orderBy === 'none' ? undefined : orderBy, // Если orderBy === 'none', передаем undefined
    skip: offset,
    take: limit,
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
