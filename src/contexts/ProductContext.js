import React ,{createContext,useEffect,useState} from 'react';
import axios from "axios";
export const ProductContext=createContext();

const ProductProvider = ({children}) => {

  const [products,setproducts]=useState([])

  useEffect(() => {
     axios.get("https://fakestoreapi.com/products")
     .then((data) => setproducts(data.data))
     
     .catch((err) => console.log(err))
}, [])

  return <ProductContext.Provider value={{products}}>{children}
  </ProductContext.Provider>
};

export default ProductProvider;
