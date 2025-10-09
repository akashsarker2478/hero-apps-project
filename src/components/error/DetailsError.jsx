import React from 'react';
import error12 from '../../assets/error12.jpg'
import { Link } from 'react-router';
const DetailsError = () => {
    return (
       <div className="flex flex-col items-center justify-center min-h-screen text-center gap-5">
      <img src={error12} alt="App Not Found" className="w-72 md:w-96 rounded-4xl" />
      <h1 className="font-bold text-3xl text-gray-700">OOPS!! APP NOT FOUND</h1>
      <Link to={'/'} className='btn bg-gradient-to-b from-[#632ee3] to-[#9f62f2] text-white'>Back Home</Link>
    </div>
    );
};

export default DetailsError;