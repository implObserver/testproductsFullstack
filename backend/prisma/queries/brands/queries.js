import { prisma } from '../../getClient.js';

const getBrands = async () => {
    const brands = await prisma.brand.findMany();
    console.log(brands.length);
    return brands;
}

const dropAllBrands = async () => {
    await prisma.brand.deleteMany({});
}

export const brandQueries = {
    getBrands,
    dropAllBrands,
};
