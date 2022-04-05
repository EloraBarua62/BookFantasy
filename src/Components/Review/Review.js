import React from 'react';
import useReview from '../../hooks/useReview';

const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            <h1 className='text-4xl font-semibold'>Total reviews of users is : {reviews.length}</h1>
        </div>
    );
};

export default Review;