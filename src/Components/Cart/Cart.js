import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Cart.css'

const Cart = ({user}) => {
    const {img,name,review,rating} = user;
    return (
        <div className='w-9/12 bg-slate-200 my-10 mx-auto text-left p-10 shadow-xl'>
            <div className='flex items-center'>
                <img className='img-design mr-5' src={img} alt="" />
                <h1 className='text-xl font-medium'>{name}</h1>
            </div>
            <br />            
            <h1 className='text-stone-300'>
                <Rating
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                    readonly
                ></Rating>
            </h1>
            <br />
            <p>{review}</p>
            <br />
        </div>
    );
};

export default Cart;