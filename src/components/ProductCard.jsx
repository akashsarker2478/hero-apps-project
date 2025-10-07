
import { Download, Star } from 'lucide-react';
import React from 'react';

const ProductCard = ({product}) => {
    const {title,image,downloads,ratingAvg} = product;
    return (
       <div className="card bg-base-100  shadow-sm border-1 hover:scale-105 transition ease">
  <figure className='h-48 overflow-hidden'>
    <img className='w-full object-cover object-top'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <div className="card-actions justify-between">
      <div className='flex  items-center gap-1  bg-[#F1F5E8] btn'>
        <Download className='w-4 fill-[#00D390] text-[#00D390]'></Download>
        <p className='text-[#00D390]'>{downloads}</p>
      </div>
      <div className='flex gap-1 items-center bg-[#FF8811]/10 btn'>
        <Star className='w-4 fill-[#FF8811] text-[#FF8811]'></Star>
        <p className='text-[#FF8811]'>{ratingAvg}</p>
      </div>
    </div>
  </div>
</div>
    );
};

export default ProductCard;