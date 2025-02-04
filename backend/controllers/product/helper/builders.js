// helpers/queryHelpers.js
export const buildFilters = (query) => {
  const {
    filterType,
    filterName,
    sorType,
    sortName,
    search
  } = query;

  const filters = {};

  // Если filterName не пустой и не 'none'
  if (filterName && filterName !== 'none') {
    // Проверяем, является ли filterName числом (для поиска по price)
    const isNumber = !isNaN(parseFloat(filterName)) && isFinite(filterName);

    if (filterType === 'search') {
      // Поиск по нескольким полям: name, brand и price (если число)
      filters.OR = [
        { name: { contains: filterName, mode: 'insensitive' } }, // Поиск по name
        { brand: { contains: filterName, mode: 'insensitive' } }, // Поиск по brand
      ];

      // Если filterName — число, добавляем поиск по price
      if (isNumber) {
        filters.OR.push({ price: { equals: parseFloat(filterName) } }); // Точное совпадение по price
      }
    } else if (filterType === 'brand') {
      // Фильтр по бренду
      filters.brand = filterName;
    }
  }

  console.log('Built filters:', filters);
  return filters;
};

export const buildSorting = (query) => {
  const { sortBy, sortOrder } = query;
  const validSortFields = ['name', 'price', 'createdAt'];
  const validOrders = ['asc', 'desc'];

  return validSortFields.includes(sortBy)
    ? { [sortBy]: validOrders.includes(sortOrder) ? sortOrder : 'asc' }
    : { id: 'asc' }; // Изменено с createdAt на id
};

export const buildPagination = (query) => {
  const page = parseInt(query.page) || 1;
  const limit = 20;
  const offset = (page - 1) * limit;
  return { page, limit, offset };
};
