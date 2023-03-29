import React, { useContext } from 'react';

import {  useEffect, useState } from "react";
import { SidebarContext } from '../contexts/SidebarContext';
import {BsBag}from'react-icons/bs'
const Header = () => {
  const {isOpen,setIsopen} =useContext(SidebarContext);
  return (

  <header className='bg-pink-200'>
  <div>Header</div>
  <div onClick={()=> setIsopen(!isOpen)} className='cursor-pointer flex relative w-12 h-12'>
    <BsBag className='text-2xl '></BsBag>
  </div>
  </header>
  )
};

export default Header;
