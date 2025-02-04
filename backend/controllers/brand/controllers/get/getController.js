import asyncHandler from 'express-async-handler';
import { prismaDB } from '../../../../prisma/queries/queries.js';

const get_brands = asyncHandler(async (req, res, next) => {
    const brands = prismaDB.getBrands();
    res.json({ brands });
});

export const getController = {
    get_brands,
};