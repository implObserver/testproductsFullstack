import { SortingCheckbox } from "@/entities/sortingCheckbox";
import { useAppDispatch } from "@/services/lib/helper/hooks/useAppDispatch";
import { productsPageSliceActions } from "@/services/model/product";
import { useLazyFetchPaginationProductsQuery } from "@/services/model/product/api/productApi";
import { selectProductsPageState } from "@/services/model/product/model/slice/productsPage/selectors";
import { Filter } from "@/services/model/product/model/types/product";
import { useCustomState } from "@/shared/lib/helper/hooks/useCustomState";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const FilterByName = () => {
    const search = useCustomState('');
    const state = useSelector(selectProductsPageState);
    const [fetchProducts] = useLazyFetchPaginationProductsQuery();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const filter: Filter = {
            type: 'search',
            name: search.getState(),
        }
        dispatch(productsPageSliceActions.setFilter(filter));
        fetchProducts(state);
    }, [search.getState()])

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        search.setState(e.target.value);
    }
    return (
        <div>
            <input value={search.getState()} onChange={changeHandler} type="text" placeholder="Поиск..." />
        </div>
    )
}