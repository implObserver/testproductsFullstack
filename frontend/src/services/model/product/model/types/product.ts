export interface Product {
    id: number,
    name: string,
    brand?: string,
    price: number,
}

export interface ProductsPageState {
    filter: string,
    sort: string,
    page: number,
    offset: number,
    limit: number,
}