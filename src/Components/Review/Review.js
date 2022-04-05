import React from 'react';
import './Review.css'

const Review = ({user}) => {
    return (
        <div className='w-9/12 bg-amber-200 mb-10 mx-auto text-left p-10'>
            <div className='flex items-center'>
                <img className='img-design mr-5' src={user.img} alt="" />
                <h1 className='text-2xl font-normal'>{user.name}</h1>
            </div>            
            <br />
            <p>{user.review}</p>
            <br />
            <h1 className='text-xl'>Rating : {user.rating}</h1>
        </div>
    );
};

export default Review;