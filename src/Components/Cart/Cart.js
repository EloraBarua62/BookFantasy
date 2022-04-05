import React from 'react';
import './Cart.css'

const Cart = ({user}) => {
    const {img,name,review,rating} = user;
    return (
        <div className='w-9/12 bg-amber-200 mb-10 mx-auto text-left p-10'>
            <div className='flex items-center'>
                <img className='img-design mr-5' src={img} alt="" />
                <h1 className='text-xl font-medium'>{name}</h1>
            </div>            
            <br />
            <p>{review}</p>
            <br />
            <h1 className='text-xl font-normal'>Rating : {rating}</h1>
        </div>
    );
};

export default Cart;