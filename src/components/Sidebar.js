import React, { useContext } from 'react';
import {IoMdArrowForward}from 'react-icons/io'
import {FiTrash2}from 'react-icons/fi'
import CartItem from '../components/CartItem'
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import styles from'./Sidebar.css'
const Sidebar = () => {
  const {cart,clearCart }=useContext(CartContext)
  console.log(cart,'takwa ali');
 const {isOpen,handleClose}= useContext(SidebarContext)

  return <div style={styles.scrollbar} className={`${isOpen ?'right-0':'-right-full'} w-full bg-white  fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw]
  transition-all duration-300 z-20 px-4 lg:px-[35px]`}>

    <div className='flex justify-between items-center py-6 border-b'>
      <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
      <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <IoMdArrowForward className='text-2xl'></IoMdArrowForward>
      </div>
    </div>
    <div>
      {cart.map((item)=>{
        return <CartItem item={item} key={item.id} />
      })}
    </div>
    
    <div className='flex w-full flex-col gap-y-3 py-4 mt-4'>
      <div className='flex w-full justify-between items-center '>
        <div className='font-semibold'>
          <span className='mr-2'>Total: </span>$1000
        </div>
        <div onClick={()=>clearCart()} className='cursor-pointer bg-red-500 text-white py-4 w-12 h-12 flex justify-center items-center text-xl'>
          <FiTrash2/>
        </div>
      </div>
    </div>
  </div>;
};

export default Sidebar;
