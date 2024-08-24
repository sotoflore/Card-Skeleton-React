interface ProductCardProps{
    title: string;
    price: number;
    imageUrl: string;
}

const ProductCard = ({ title, price, imageUrl }: ProductCardProps) => {
    
    return (
        <div className="product-card">
            <img src={imageUrl} alt={title} className="product-image" />
            <div className="product-details">
                <h3 className="product-title">{title}</h3>
                <div className="price-and-button">
                    <p className="product-price">${price.toFixed(2)}</p>
                    <a href="#" className="add-to-cart">Add to cart</a>
                </div>
            </div>
        </div>
    )
}
export default ProductCard