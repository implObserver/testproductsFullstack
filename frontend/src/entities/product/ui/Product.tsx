'use client';

import { Product } from "@/services/model/product/model/types/product"

interface ProductProps {
    product: Product,
}

export const ProductContainer: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="
        grid 
        w-[calc(var(--responsive-size)*20)] 
        border-2">
            <div className="grid p-[var(--responsive-size)]">
                <span className="font-[600]">Имя Продукта:</span>
                {product.name}
            </div>
            <div className="grid p-[var(--responsive-size)]">
                <span className="font-[600]">Розничная цена:</span>
                {product.price}
            </div>
            <div className="grid p-[var(--responsive-size)]">
                <span className="font-[600]">Брэнд:</span>
                {product.brand}
            </div>
        </div>
    )
}