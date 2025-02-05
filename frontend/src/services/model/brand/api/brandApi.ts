import { $rtkApi } from "@/services/lib/instances/rtkApi";

const brandApi = $rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchBrands: build.query<string[], void>({
            query: () => ({
                url: '/brands'
            })
        }),
    }),
});

// Экспортируйте хуки для использования в компонентах
export const {
    useFetchBrandsQuery,
} =brandApi;
