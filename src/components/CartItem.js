import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { CartContext } from '../contexts/CartContext';
const CartItem = ({ item }) => {
  //console.log(item.image,'item');
  const {removeFromCart ,increaseAmount,decreaseAmount}=useContext(CartContext)
  return <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
    <div className='w-full min-h-[150px] flex items-center  gap-x-4'>
      <Link to={`/product/${item.id}`}>

        <img className='max-w-[80px]' src={item.image}></img>
      </Link>
      <div className='w-full flex flex-col'>
        <div className='flex justify-between mb-2 '>
          <Link to={`/product/${item.id}`} className='text-sm uppercase font-medium 
        max-w-[240px] text-primary hover:underline
        '>{item.title}</Link>
          <div onClick={()=>removeFromCart(item.id)} className='text-xl cursor-pointer'>
            <IoMdClose  className='text-gray-500 hover:text-red-500 transition'></IoMdClose>
          </div>
        </div>
        <div className='flex gap-x-2 h-[36px] text-sm'>
          <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium '>
            <div onClick={()=>decreaseAmount(item.id)} className=' flex-1 h-full flex justify-center items-center  cursor-pointer'>
              <IoMdRemove />
            </div>

            <div className='h-full flex justify-center items-center px-2'>
              {item.amount}
            </div>
            <div onClick={()=>increaseAmount(item.id)} className='flex-1 h-full flex justify-center items-center  cursor-pointer'>
              <IoMdAdd />
            </div>
          </div>

          <div className='flex-1 flex justify-around items-center text-primary font-medium' >${item.price}</div>
          <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`$ ${parseFloat(item.price *item.amount).toFixed(2)}`}</div>
        </div>
      </div>
    </div>
  </div>;
};

export default CartItem;
