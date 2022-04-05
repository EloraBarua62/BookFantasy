import React from 'react';
import { NavLink } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Cart from '../Cart/Cart';

const SecondSection = () => {
    const [reviews, setReviews] = useReview();
    const homeReview = reviews.slice(0,3);
    return (
        <div>
            <h1 className='text-4xl font-semibold mt-36 text-center text-bold text-yellow-800'>BOOK READER'S REVIEW</h1>
            <hr />
            <hr />
            {
                homeReview.map(user => <Cart
                    key={user.id}
                    user={user}
                ></Cart>)
            }
            <div className='flex justify-center mb-10 '>
                <button className='bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-2 px-4 border border-blue-700 rounded'><NavLink to='/review'>See All Reviews</NavLink></button>
            </div>
            
        </div>
    );
};

export default SecondSection;