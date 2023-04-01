import React ,{useContext}from 'react';
import{useParams}from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';

const ProductDetails = () => {
  const {id}=useParams();
  const {products}=useContext(ProductContext)
  const {addToCart}=useContext(CartContext)
  const product=products.find(item=>{
    return item.id === parseInt(id);
  })
  
  return <>
  <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
    <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row items-center'>
    <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 '>
      <img src={product.image}className='max-w-[180px] lg:max-w-sm' />
    </div>
    <div className='flex-1 text-center lg:text-left ' >
      <h1 className='text-[26px] font-medium mb-2 max-w-[450px] max-auto '>{product.title}</h1>
    </div>
    <div className='text-xl text-red-500 font-medium mb-6 '>$ {product.price}</div>
    <div>
      <p>{product.description}</p>
    </div>
    </div>
    </div>
  </section>
  </>;
};

export default ProductDetails;
