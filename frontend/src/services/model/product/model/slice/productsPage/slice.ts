import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { ProductsPageState } from "../../types/product";

const productsPageSlice = createSlice({
    name: 'products_page',
    initialState,
    reducers: {
        resetState: () => {
            return initialState;
        },
        next: (state: ProductsPageState) => {
            state.page++;
            state.offset++;
        },
        prev: (state: ProductsPageState) => {
            state.page--;
            state.offset--;
        },
    },
})

export const productsPageSliceActions = productsPageSlice.actions;
export const productsPageSliceReducer = productsPageSlice.reducer;