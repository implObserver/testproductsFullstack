// helpers/queryHelpers.js
export const buildFilters = (query) => {
  const { brand, priceMin, priceMax, search } = query;
  const filters = {};

  if (brand) filters.brand = brand;
  if (priceMin || priceMax) {
    filters.price = {};
    if (priceMin) filters.price.gte = parseFloat(priceMin);
    if (priceMax) filters.price.lte = parseFloat(priceMax);
  }
  if (search) {
    filters.name = { contains: search, mode: 'insensitive' };
  }

  return filters;
};

export const buildSorting = (query) => {
  const { sortBy, sortOrder } = query;
  const validSortFields = ['name', 'price', 'createdAt'];
  const validOrders = ['asc', 'desc'];

  return validSortFields.includes(sortBy)
    ? { [sortBy]: validOrders.includes(sortOrder) ? sortOrder : 'asc' }
    : { createdAt: 'desc' };
};

export const buildPagination = (query) => {
  const page = parseInt(query.page) || 1;
  const limit = 20;
  const offset = (page - 1) * limit;
  return { page, limit, offset };
};
