import { DropDownList } from "@/entities/dropDownList";
import { useAppDispatch } from "@/services/lib/helper/hooks/useAppDispatch";
import { useFetchBrandsQuery } from "@/services/model/brand";
import { productsPageSliceActions } from "@/services/model/product";
import { useFetchPaginationProductsQuery, useLazyFetchPaginationProductsQuery } from "@/services/model/product/api/productApi";
import { selectProductsPageState } from "@/services/model/product/model/slice/productsPage/selectors";
import { Filter } from "@/services/model/product/model/types/product";
import { useCustomState } from "@/shared/lib/helper/hooks/useCustomState";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const FilterByBrand = () => {
    const type = 'Все брэнды';
    const brand = useCustomState(type);
    const state = useSelector(selectProductsPageState);
    const { data } = useFetchPaginationProductsQuery(state);
    const [fetchProducts] = useLazyFetchPaginationProductsQuery();
    const dispatch = useAppDispatch();
    const { data: brandss } = useFetchBrandsQuery();
    console.log(brandss)
    useEffect(() => {
        const filter: Filter = {
            type: 'brand',
            name: brand.getState(),
        }
        dispatch(productsPageSliceActions.setFilter(filter));
        fetchProducts(state);
    }, [brand.getState()])

    const brands = data?.products.map(product => product.brand);
    const uniqueBrands = [...new Set(brands)];
    const finalBrands = [type, ...uniqueBrands];

    return (
        <div>
            <DropDownList
                title="Брэнды"
                labels={finalBrands as string[]}
                state={brand}
            ></DropDownList>
        </div>
    )
}