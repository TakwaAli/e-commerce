import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const FilterProduct = () => {


    const {products}=useContext(ProductContext);
    const filteritem =(cat)=>products.filter((item) =>{
     return (item.category===cat);

    })
   
    
    
        return (
          <>
          
           {filteritem("jewelery").map((product)=>{
            return (
              <>
              <h1>{product.title}</h1>
              </>
              
             
            )
          })}
        
        </>
         
        )
        
       
    
    
};

export default FilterProduct;