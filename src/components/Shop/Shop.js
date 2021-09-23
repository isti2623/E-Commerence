import React, { useEffect, useState } from 'react';
import ItemCart from '../ItemCart/ItemCart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("./products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToBag = (products) => {
        const newCart = [...cart, products];
        setCart(newCart);
    }
    return (
        <div className="main">
            <div className="row">
                {
                    products.map(product => <Product key={product.key} product={product} handleAddToBag={handleAddToBag}></Product>)
                }
            </div>
            <div>
                <ItemCart cart={cart}></ItemCart>
            </div>
        </div>
    );
};

export default Shop;