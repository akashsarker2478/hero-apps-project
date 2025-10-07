import React from 'react';
import useAppsData from './Hook/useAppsData';
import ProductCard from './ProductCard';

const Apps = () => {
    const {products} = useAppsData()
    return (
        <div>
            <div>
                <h2 className='font-bold'>({products.length})  Apps Found</h2>
            </div>
             <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-5'>
             {
               products.map(product=><ProductCard key={product.id} product={product}></ProductCard>)
            }
           </div>
        </div>
    );
};

export default Apps;