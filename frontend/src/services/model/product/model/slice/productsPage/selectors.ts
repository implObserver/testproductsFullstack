import { ProductsPageState } from "../../types/product";

export const selectProductsPageState = (state: { persisted: { productsPage: ProductsPageState } }) => state.persisted.productsPage;