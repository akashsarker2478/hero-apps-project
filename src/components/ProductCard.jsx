
import { Download, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({product}) => {
    const {title,image,downloads,ratingAvg,id} = product;
    return (
       <Link to={`/apps/${id}`}>
       <div className="card bg-base-100  shadow-sm border-1 hover:scale-105 transition ease">
  <figure className='h-48 overflow-hidden border-1 border-gray-200'>
    <img className='w-full  object-cover object-top'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <div className="card-actions justify-between">
      <div className='flex  items-center gap-1  bg-[#F1F5E8] px-2 rounded-sm'>
        <Download className='w-4 fill-[#00D390] text-[#00D390]'></Download>
        <p className='text-[#00D390]'>{downloads}</p>
      </div>
      <div className='flex gap-1 items-center bg-[#FF8811]/10 px-2 rounded-sm'>
        <Star className='w-4 fill-[#FF8811] text-[#FF8811]'></Star>
        <p className='text-[#FF8811]'>{ratingAvg}</p>
      </div>
    </div>
  </div>
</div>
       </Link>
    );
};

export default ProductCard;