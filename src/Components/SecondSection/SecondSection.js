import React from 'react';
import useReview from '../../hooks/useReview';
import Cart from '../Cart/Cart';

const SecondSection = () => {
    const [reviews, setReviews] = useReview();
    const homeReview = reviews.slice(0,3);
    return (
        <div>
            <h1 className='text-4xl font-semibold my-10'>Book reader's review : 3</h1>

            {
                homeReview.map(user => <Cart
                    key={user.id}
                    user={user}
                ></Cart>)
            }

            <button>See All Reviews</button>
        </div>
    );
};

export default SecondSection;