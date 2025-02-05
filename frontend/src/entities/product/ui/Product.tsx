'use client';

import { Product } from "@/services/model/product/model/types/product"
import { Line } from "@/shared/ui/line";

interface ProductProps {
    product: Product,
}

export const ProductContainer: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="
        grid
        cursor-pointer
        min-w-[200px]
        p-2
        w-[calc(var(--responsive-size)*20)] 
        border-2">
            <div className="grid">
                <span className="flex font-[600] text-lg">Имя Продукта:</span>
                <div className="flex hypens-auto text-lg"
                    style={{
                        wordBreak: "break-word", // Это свойство разрывает длинные слова
                        overflowWrap: "break-word", // Также позволяет разрывать слова, если они слишком длинные
                    }}
                >
                    {product.name}
                </div>
            </div>
            <Line text=""></Line>
            <div className="grid">
                <span className="text-lg font-[600]">Розничная цена:</span>
                {product.price}
            </div>
            <Line text=""></Line>
            <div className="grid">
                <span className="text-lg font-[600]">Брэнд:</span>
                {product.brand}
            </div>
        </div>
    )
}