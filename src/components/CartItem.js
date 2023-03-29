import React from 'react';
import { Link } from 'react-router-dom';
import {IoMdClose} from 'react-icons/io'
const CartItem = ({item}) => {
//console.log(item.image,'item');
  return <div className='flex'>
    <div className='w-full min-h-[150px] flex items-center  gap-x-4'>
      <Link to={`/product/${item.id}`}>
        
        <img className='max-w-[80px]' src={item.image}></img>
      </Link>
      <div className='w-full flex flex-col'>
      <div className='flex justify-between mb-2 '>
        <Link to={`/product/${item.id}`} className='text-sm uppercase font-medium 
        max-w-[240px] text-primary hover:underline
        '>{item.title}</Link>
        <div className='text-xl cursor-pointer'>
          <IoMdClose className='text-gray-500 hover:text-red-500 transition'></IoMdClose>
        </div>
      </div>
   
    <div>quantity</div>
    <div>item price</div>
    <div>final price</div>
    </div>
    </div>
  </div>;
};

export default CartItem;
