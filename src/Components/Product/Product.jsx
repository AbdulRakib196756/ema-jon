import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
const Product = (props) => {
    const { name, id, seller, img, price, ratings } = props.product;
    const handleaddtocart = props.handleaddtocart;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='details'>
                <h6>{name}</h6>
                <p>Price:{price}</p>
                <p>manufacuterer:{seller}</p>
                <p>Ratings:{ratings}</p>
            </div>
            <button className='btn-card' onClick={() => handleaddtocart(props.product)}>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;