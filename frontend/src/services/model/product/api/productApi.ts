import { $rtkApi } from "@/services/lib/instances/rtkApi";
import { Product, ProductResponse, ProductsPageState } from "../model/types/product";

const productApi = $rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPaginationProducts: build.query<ProductResponse, ProductsPageState>({
            query: ({ filter, sort, page, limit }) => {
                const params = new URLSearchParams();

                if (filter) {
                    params.append('filterType', filter.type);
                    params.append('filterName', filter.name);
                }

                if (sort) {
                    params.append('sortType', sort.type);
                    params.append('sortName', sort.name);
                }

                params.append('page', page.toString());
                params.append('limit', limit.toString());
                console.log(`/products?${params.toString()}`)
                return {
                    url: `/products?${params.toString()}`,
                };
            },
        }),
    }),
});

// Экспортируйте хуки для использования в компонентах
export const {
    useFetchPaginationProductsQuery,
    useLazyFetchPaginationProductsQuery,
} = productApi;
