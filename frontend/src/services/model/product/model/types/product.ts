export interface Product {
    id: number,
    name: string,
    brand?: string,
    price: number,
}

export interface ProductsPageState {
    filter: Filter,
    sort: Sort,
    page: number,
    offset: number,
    limit: number,
}

export interface Filter {
    type: string,
    name: string,
}

export interface Sort {
    type: string,
    name: string,
}

export interface ProductResponse {
    products: Product[],
    totalPages: number,
    totalProducts: number,
}