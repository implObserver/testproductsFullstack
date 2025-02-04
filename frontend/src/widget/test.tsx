'use client';

import { useFetchPaginationProductsQuery } from "@/services/model/product"
import { selectProductsPageState } from "@/services/model/product/model/slice/productsPage/selectors";
import { useSelector } from "react-redux";

export const Test = () => {
    const state = useSelector(selectProductsPageState);
    const products = useFetchPaginationProductsQuery(state);
    console.log(state)
    console.log(products)
    return (
        <div>
            test
        </div>
    )
}