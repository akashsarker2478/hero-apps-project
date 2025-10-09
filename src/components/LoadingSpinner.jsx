import React from 'react';
import logo from '../assets/logo.png'
const LoadingSpinner = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
            <div 
                className="w-20 h-20 animate-spin border-blue-500"
            ><img src={logo} alt="" /></div>
            <p className="ml-4 text-2xl font-semibold text-gray-700 animate-pulse">Loading your data</p>
        </div>
        </div>
    );
};

export default LoadingSpinner;