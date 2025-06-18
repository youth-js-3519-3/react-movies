import StarRating from "../StarRating";

export type ProductCardProps = {
    product: {
        title: string;
        price: number;
        originalPrice: number;
        rating: number;
        image: string;
    }
}

const ProductCard = ({
    product: {
        title,
        price,
        originalPrice,
        rating,
        image,
    }
}: ProductCardProps) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} />
            <span>{title}</span>
            <StarRating rating={rating} />
            {originalPrice > price && (
                <span className="original-price">
                    {originalPrice.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'brl'
                    })}
                </span>
            )}
            <span className="price">
                {price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'brl'
                })}
            </span>
        </div>
    )
}

export default ProductCard