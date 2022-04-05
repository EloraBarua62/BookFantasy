import React from 'react';
import useReview from '../../hooks/useReview';
import Cart from '../Cart/Cart';


const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center mt-20'>Total reviews of users is : {reviews.length}</h1>

            {
                reviews.map(user => <Cart
                key={user.id}
                user={user}
                ></Cart>)
            }
        </div>
    );
};

export default Reviews;