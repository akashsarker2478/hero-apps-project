import React from 'react';
import Navbar from '../header/Navbar';
import Footer from '../header/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            
            <div className='flex-1 max-w-screen-xl w-full px-4 md:px-8 lg:px-12 mx-auto py-4 md:py-8 lg:py-12 bg-[#e2eff5]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Root;