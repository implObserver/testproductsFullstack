import { ProductsPageState } from "../../types/product";

export const initialState: ProductsPageState = {
    filter: { type: 'none', name: 'none' },
    sort: { type: 'none', name: 'none' },
    page: 1,
    offset: 0,
    limit: 20,
}