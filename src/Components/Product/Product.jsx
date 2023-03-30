import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,id,seller,img,price,ratings}=props.product;
 
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='details'>
            <h6>{name}</h6>
            <p>Price:{price}</p>
            <p>manufacuterer:{seller}</p>
            <p>Ratings:{ratings}</p>
            </div>
            <button className='btn-card'>Add to Cart</button>
        </div>
    );
};

export default Product;