import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center mx-6'>
                <h1 className='text-6xl font-bold'>Book<span className='text-yellow-700'>Fantasy</span> </h1>
                <nav>
                    <Link to='/home'>HOME</Link>
                    <Link to='/review'>REVIEW</Link>
                    <Link to='/dashboard'>DASHBOARD</Link>
                    <Link to='/blog'>BLOGS</Link>
                    <Link to='/about'>ABOUT</Link>
                </nav>
            </div>
        </div>       
    );
};

export default Header;