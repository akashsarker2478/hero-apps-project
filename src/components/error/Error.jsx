import React from 'react';
import errorPng from '../../assets/error.png'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
           <div className='flex justify-center items-center'>
             <img src={errorPng} alt="" />
           </div>
           <div className='text-center'>
            <h1 className='font-bold text-4xl'>Oops, page not found!</h1>
            <p>The page you are looking for is not available.</p>
           </div>
           <div className='flex justify-center mt-4'>
            <Link to={'/'} className='btn bg-gradient-to-b from-[#632ee3] to-[#9f62f2] text-white'>Back To Home</Link>
           </div>
        </div>
    );
};

export default Error;