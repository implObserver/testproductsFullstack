'use client';
import { useAppDispatch } from "@/services/lib/helper/hooks/useAppDispatch";
import { productsPageSliceActions, useFetchPaginationProductsQuery } from "@/services/model/product";
import { selectProductsPageState } from "@/services/model/product/model/slice/productsPage/selectors";
import { useSelector } from "react-redux";
import styles from './styles/ProductsPaginationContainer.module.css'
import { useEffect } from "react";
import { useLazyFetchPaginationProductsQuery } from "@/services/model/product/api/productApi";
import { ProductContainer } from "@/entities/product";
import { FilterByBrand } from "@/features/filters/product/byBrand";
import { FilterByName } from "@/features/filters/product/byName";

export const ProductsPaginationContainer = () => {
    const state = useSelector(selectProductsPageState);
    const data = useFetchPaginationProductsQuery(state).currentData;
    const [fetchProducts] = useLazyFetchPaginationProductsQuery();
    const products = data?.products;
    const currentPage = state.page;
    const totalPages = data?.totalPages as number;
    const dispatch = useAppDispatch();
    console.log(currentPage)

    useEffect(() => {
        fetchProducts(state);
    }, [state])

    const loadMorePostsUp = () => {
        if (currentPage < totalPages) {
            dispatch(productsPageSliceActions.next());
        }
    };

    const loadMorePostsBack = () => {
        if (currentPage > 1) {
            dispatch(productsPageSliceActions.prev());
        }
    };

    const fill = () => {
        return products?.map(product => {
            return (
                <ProductContainer key={product.id} product={product} />
            )
        })
    }

    return (
        <div className={`${styles.container}`}>
            <FilterByBrand />
            <FilterByName />
            <div className={styles.products}>
                {fill()}
            </div>
            <div className={styles.pagination}>
                <button className={currentPage === 1
                    ? styles.block
                    : styles.pagination_btn}
                    onClick={loadMorePostsBack}>
                    назад
                </button>
                <span className={totalPages === 1
                    ? styles.block
                    : ''}>
                    {currentPage} из {totalPages}
                </span>
                <button
                    className={totalPages === currentPage
                        ? styles.block
                        : styles.pagination_btn}
                    onClick={loadMorePostsUp}>
                    вперед
                </button>
            </div>
        </div >
    )
}