
const ProductCardSkeleton = () => {
    return (
        <div className="product-card skeleton">
            <div className="product-image-skeleton"></div>
            <div className="product-details">
                <div className="product-title-skeleton"></div>
                <div className="price-and-button-skeleton">
                    <p className="product-price-skeleton"></p>
                    <a href="#" className="add-to-cart-skeleton"></a>
                </div>
            </div>
        </div>
    )
}
export default ProductCardSkeleton;