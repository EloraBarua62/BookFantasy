import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='sticky top-0 bg-white pb-4 shadow-md'>
            <div className='flex justify-between items-center mx-20'>
                <h1 className='text-6xl font-bold'>Book<span className='text-yellow-700'>Fantasy</span> </h1>
                <nav className='font-medium'>
                    <NavLink className='mr-4 hover:text-yellow-700' to='/home'>HOME</NavLink>
                    <NavLink className='mr-4 hover:text-yellow-700' to='/review'>REVIEW</NavLink>
                    <NavLink className='mr-4 hover:text-yellow-700' to='/dashboard'>DASHBOARD</NavLink>
                    <NavLink className='mr-4 hover:text-yellow-700' to='/blog'>BLOGS</NavLink>
                    <NavLink className='mr-4 hover:text-yellow-700' to='/about'>ABOUT</NavLink>
                </nav>
            </div>
        </div>       
    );
};

export default Header;