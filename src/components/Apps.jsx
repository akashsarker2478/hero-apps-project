import React, { useState } from 'react';
import useAppsData from './Hook/useAppsData';
import ProductCard from './ProductCard';

const Apps = () => {
    const {products} = useAppsData()
    const [search,setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedProducts = term? products.filter(product=>product.title.toLocaleLowerCase().includes(term)) : products
    console.log(searchedProducts)
    return (
        <div>
            <div className='flex justify-between'>
                <h2 className='font-bold'>({products.length})  Apps Found</h2>
                <label className="input">
 
  <input 
  value = {search}
  onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="search apps" />
</label>
            </div>
             <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-5'>
             {
               searchedProducts.map(product=><ProductCard key={product.id} product={product}></ProductCard>)
            }
           </div>
        </div>
    );
};

export default Apps;