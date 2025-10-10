import React from 'react';
import { Link} from 'react-router';
import playStore from '../assets/googlePlay.png'
import appStore from '../assets/appStore.png'
import hero from '../assets/hero.png'
import useAppsData from './Hook/useAppsData';
import ProductCard from './ProductCard';
import LoadingSpinner from './LoadingSpinner';

const Home = () => {
    const {products,loading} = useAppsData()
    const homeProducts = products.slice(0,8)
     if (loading) {
        return <LoadingSpinner />;
    }
    return (
        <div >
            <div>
                <h1 className='text-4xl text-center font-bold'>We Build <br /> <span className='bg-gradient-to-b from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                <p className='m-3 text-center text-[#627382]'>NextGen Apps, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>

                <div className='flex justify-center gap-5 m-5'>
                    <button className='btn' onClick={() => window.open('https://play.google.com/store', '_blank')}><img src= {playStore} alt="" />Google Play</button>
                    <button className='btn'onClick={() => window.open('https://apps.apple.com/', '_blank')} > <img src={appStore} alt="" /> App store</button>
                </div>
                <div>
                    <img className='w-[600px] mx-auto' src={hero} alt="" />
                </div>
                <div className=' p-5 rounded-xl bg-gradient-to-b from-[#632ee3] to-[#9f62f2]'>
                    
                        <h1 className='font-bold text-3xl text-white text-center'>Trusted by Millions, Built for You</h1>
                   
                    <div className='grid grid-cols-1 md:grid-cols-3 '>
                        <div  className="p-8 text-center">
                            <p  className="text-lg uppercase opacity-70 mb-1 text-white">Total Downloads</p>
                            <p className="text-6xl md:text-7xl font-bold tracking-tighter my-2 text-white"> 29.6M</p>
                            <p className="text-base font-medium opacity-80 mt-1 text-white"> 21% More Than Last Month</p>
                        </div>
                        <div  className="p-8 text-center">
                            <p className='text-lg uppercase opacity-70 mb-1 text-white'>Total Reviews</p>
                            <p className="text-6xl md:text-7xl font-bold tracking-tighter my-2 text-white"> 906K</p>
                            <p className="text-base font-medium opacity-80 mt-1 text-white"> 46% More Than Last Month</p>
                        </div>
                        <div  className="p-8 text-center">
                            <p className="text-lg uppercase opacity-70 mb-1 text-white"> Active Apps</p>
                            <p className="text-6xl md:text-7xl font-bold tracking-tighter my-2 text-white"> 132+</p>
                            <p  className="text-base font-medium opacity-80 mt-1 text-white"> 31 More Will Launch</p>
                        </div>
                    </div>
                </div>
                <div className='text-center p-5'>
                    <h3 className='font-bold text-3xl'>Trending Apps</h3>
                    <p className='text-[#627382] text-[18px]'><small>Explore All Trending Apps on the Market developed by us</small></p>
                </div>
           <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 my-5'>
             {
               homeProducts.map(product=><ProductCard key={product.id} product={product}></ProductCard>)
            }
           </div>
            <div className='flex justify-center mt-3'>
                 <Link to={'/apps'} className='btn bg-gradient-to-b from-[#632ee3] to-[#9f62f2] text-white'>Show All</Link>
            </div>
        </div>
       
    );
};

export default Home;