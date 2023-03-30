import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [Products,Setproducts]=useState([])
    useEffect(()=>{
        fetch('../../../public/products.json')
        .then(res=>res.json())
        .then(data=>Setproducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="product-container">
               
               {
                Products.map(product=><Product
                     product={product}
                     key={product.id}>
                     </Product>)
               }

            </div>
            <div className="cart-container">
                     <h2>cart container</h2>
            </div>
            
        </div>
    );
};

export default Shop;