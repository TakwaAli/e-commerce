import React, { useContext } from 'react';

import {  useEffect, useState } from "react";
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import {BsBag}from'react-icons/bs'
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg'
const Header = () => {
  const {isOpen,setIsopen} =useContext(SidebarContext);
  const {itemAmount,setItemAmount} =useContext(CartContext);
  return (

  <header className='bg-pink-200'>

    <div className='container mx-auto  flex items-center justify-between h-full'> 
  <Link to={'/'}>
    <img className='w-[40px]' src={Logo}></img>
  </Link>
  <div onClick={()=> setIsopen(!isOpen)} className='cursor-pointer flex relative  '>
    <BsBag className='text-2xl '></BsBag>
    <div className='bg-red-500 absolute -right-2 
    -bottom-2 text-[12px] w-[18px] h-[18px] text-white 
    rounded-full flex  justify-center items-center
    '>{itemAmount}</div>
  </div>
    </div>
  </header>
  )
};

export default Header;
