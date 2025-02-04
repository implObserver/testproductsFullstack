import { ProductsPageState } from "../../types/product";

export const initialState: ProductsPageState = {
    filter: 'none',
    sort: 'none',
    page: 1,
    offset: 0,
    limit: 20,
}