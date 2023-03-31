import React from 'react';
import './Card.css'
const Card = ({cart}) => {
    console.log(cart)
    let total=0;
    let totalshipping=0;
    for (const product of cart){
        total=total+product.price;
        totalshipping=totalshipping+product.shipping;
        
    }
    const tax=(total*0.7).toFixed(2);
    const grandtotal=total+tax+totalshipping;
    

    
    return (
        <div>
            <h2>selected item</h2>
            <p>Selected item:{cart.length}</p>
            <p>Total Price:${total} </p>
            <p>Total Shipping:{totalshipping}</p>
            <p>Tax:{tax}</p>
            <h6>Grand Total:{grandtotal}</h6>
        </div>
    );
};

export default Card;