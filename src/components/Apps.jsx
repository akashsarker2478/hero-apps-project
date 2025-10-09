import React, { useState } from 'react';
import useAppsData from './Hook/useAppsData';
import ProductCard from './ProductCard';
import NoAppFound from './NoAppFound';
import LoadingSpinner from './LoadingSpinner';

const Apps = () => {
    const {products,loading} = useAppsData()
    const [search,setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedProducts = term? products.filter(product=>product.title.toLocaleLowerCase().includes(term)) : products
       if (loading) {
        return <LoadingSpinner />;
    }
    return (

<div>
            <div className='text-center my-5'>
                <h2 className='font-bold text-3xl'>Our All Applications</h2>
                <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='my-2 md:flex justify-between'>
                <h2 className='font-bold'>({searchedProducts.length}) Apps Found</h2>
                <label className="input">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                        placeholder="search apps"
                    />
                </label>
            </div>
            {searchedProducts.length > 0 ? (
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 my-5'>
                    {searchedProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <NoAppFound />
            )}
        </div>
    );
};

export default Apps;