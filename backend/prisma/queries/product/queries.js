import { prisma } from '../../getClient.js';

const getPaginationProducts = async (offset, limit) => {
  return prisma.product.findMany({
    skip: offset,
    take: limit,
    orderBy: {
      postingDate: 'desc',
    },
  });
};

export const postQueries = {
  getPaginationProducts,
};
