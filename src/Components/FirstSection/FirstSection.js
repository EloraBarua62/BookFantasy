import React from 'react';

const FirstSection = () => {
    return (
        <div className='flex justify-between m-20'>
            <div className='text-left mr-20'>
                <h1 className='text-5xl font-bold'><span className='text-yellow-700'>Spend</span> time in</h1>
                <h1 className='text-5xl font-bold'><span className='text-yellow-700'>Magical</span> world</h1>

                <p className='text-2xl mt-10'>Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.</p>
            </div>
            <img className='w-96' src="Harry Potter.jpg" alt="" />
        </div>
    );
};

export default FirstSection;