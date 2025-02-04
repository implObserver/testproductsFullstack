import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { Filter, ProductsPageState } from "../../types/product";

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
        setFilter: (state: ProductsPageState, action: PayloadAction<Filter>) => {
            state.filter = action.payload.name === 'Все брэнды'
                ? { type: action.payload.type, name: 'none' }
                : action.payload;
        },
    },
})

export const productsPageSliceActions = productsPageSlice.actions;
export const productsPageSliceReducer = productsPageSlice.reducer;