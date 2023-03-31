import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [Products,Setproducts]=useState([])
    const [Cart,Setcart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>Setproducts(data))
    },[])
    const handleaddtocart=(product)=>{
       const newcart=[...Cart,product]
       Setcart(newcart)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
               
               {
                Products.map(product=><Product
                     product={product}
                     key={product.id}
                     handleaddtocart={handleaddtocart}>
                     </Product>)
               }

            </div>
            <div className="cart-container">
                     <Card cart={Cart}></Card>
            </div>
            
        </div>
    );
};

export default Shop;