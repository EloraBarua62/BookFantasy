import React from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            <h1 className='text-4xl font-semibold'>Total reviews of users is : {reviews.length}</h1>

            {
                reviews.map(user => <Review
                key={user.id}
                user={user}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;