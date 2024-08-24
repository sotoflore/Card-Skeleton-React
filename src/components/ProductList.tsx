import { useEffect, useState } from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";
import ProductCard from "./ProductCard";

interface Product {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
}

const ProductList = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { 

        // Simulacion de una llamada a una API
        setTimeout(() => {
            
            setProducts([
                { id: 1, title: 'Producto 1', price: 19.99, imageUrl: '/images/product1.png' },
                { id: 2, title: 'Producto 2', price: 29.99, imageUrl: '/images/product2.png' },
                { id: 3, title: 'Producto 3', price: 39.99, imageUrl: '/images/product3.png' },
            ]);

            setLoading(false);
        }, 2000)

    },[])

    return (
        <div className="product-list">
            {
                loading ? (
                    <>
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                    </>
                ) : (
                        products.map(producto => (
                        <ProductCard
                            key={producto.id}
                            title={producto.title}
                            price={producto.price}
                            imageUrl={producto.imageUrl}     
                        />
                    ))    
                )
            }
        </div>
    )
}
export default ProductList