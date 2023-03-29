import React ,{useContext,useState} from 'react';
import { Link } from 'react-router-dom';
import {BsPlus ,BsEyeFill}from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext';
const Product = ({Product}) => {
  //console.log(Product,"takwa");

 // console.log(useContext(CartContext));
  const {addToCart}=useContext(CartContext)

  return <div>
    <div className='border  border-[#e4e4e4] h-[300px] mb-4
    relative overflow-hidden group transition
    '>

      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-[200px] mx-auto flex justify-center items-center'>
          <img className='max-h-[160px] group-hover:scale-110 
          transition duration-300
          ' src={Product.image}></img>
        </div>
      </div>
      <div className='absolute top-6 right-11 group-hover:right-5 p-2
      flex flex-col justify-center items-center gap-y-2 
      opacity-0 group-hover:opacity-100 transition-all 
      duration-300 
      '>
        <button onClick={()=>addToCart(Product,Product.id)}>
          <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'><BsPlus className='text-3xl'></BsPlus></div>
        </button>
        <Link to={`/product/${Product.id}`} className='flex justify-center items-center text-primary w-12 h-12 bg-white drop-shadow-xl'>
          <BsEyeFill></BsEyeFill>
        </Link>
      </div>
    </div>
    <div>
      <div>
        <Link to={`/product/${Product.id}`}><h2 className='font-semibold mb-1'>{Product.title}</h2></Link>
        <h3 className='font-semibold'>$ {Product.price}</h3>
      </div>
    </div>
  </div>;
};

export default Product;
