'use client';

import { Product } from "@/services/model/product/model/types/product"

interface ProductProps {
    product: Product,
}

export const ProductContainer: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="
        grid
        cursor-pointer
        min-w-[200px]
        w-[calc(var(--responsive-size)*20)] 
        border-2">
            <div className="grid p-[var(--responsive-size)]">
                <span className="flex font-[600]">Имя Продукта:</span>
                <div className="flex hypens-auto text-lg"
                    style={{
                        wordBreak: "break-word", // Это свойство разрывает длинные слова
                        overflowWrap: "break-word", // Также позволяет разрывать слова, если они слишком длинные
                    }}
                >
                    {product.name}
                </div>
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