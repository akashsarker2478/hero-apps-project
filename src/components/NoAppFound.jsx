import React from 'react';

import appError from '../assets/AppError.png'
import { Link } from 'react-router';

const NoAppFound = () => {
    return (
        <div>
   <div className='flex flex-col items-center justify-center min-h-screen text-center gap-5'>
            <img src={appError} alt="App Not Found" className='w-72 md:w-96 mx-auto' />
            <h1 className='font-bold text-3xl text-gray-600'>OOPS!! NO APPS FOUND</h1>
            
                <Link to={'/'} className='btn text-white bg-gradient-to-b from-[#632ee3] to-[#9f62f2]'>
                Back To Home
                </Link>
            
        </div>
        </div>
    );
};

export default NoAppFound;