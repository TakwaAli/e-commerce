import React ,{createContext,useState}from 'react';
export const SidebarContext =createContext()
const SidebarProvider = ({children}) => {
  const [isOpen,setIsopen]=useState(false);
  const handleClose=()=>{
    setIsopen(false);
  };
  return <SidebarContext.Provider value={{isOpen ,setIsopen,handleClose}}>

    {children}
  </SidebarContext.Provider>;
};

export default SidebarProvider;
