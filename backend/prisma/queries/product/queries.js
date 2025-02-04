import { prisma } from '../../getClient.js';

const getPaginationProducts = async (offset, limit, filters, orderBy) => {
  return prisma.product.findMany({
    where: filters,
    orderBy,
    skip: offset,
    take: limit,
  });
};

const countProducts = async (filters) => {
  return await prisma.product.count({
    where: filters,
  });
};

export const productQueries = {
  getPaginationProducts,
  countProducts,
};
