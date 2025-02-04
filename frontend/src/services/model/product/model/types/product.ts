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

export interface ProductResponse {
    products: Product[],
    totalPages: number,
    totalProducts: number,
}