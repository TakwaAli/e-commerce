/* import React ,{createContext,useState,useEffect}from 'react';
 

export const CartContext =createContext();

const CartProvider = ({childern}) => {
  const [cart,setCart]=useState([]);


  const addToCart = ()=>{
    console.log("add to card");
  };
  return <CartContext.Provider value={addToCart}>
    {childern}
    </CartContext.Provider>
};

export default CartProvider; */
import React ,{createContext,useState}from 'react';
export const CartContext =createContext()
const CartProvider = ({children}) => {
  const [cart,setCart]=useState([]);


  const addToCart = (productitem,id)=>{
    const newItem ={...productitem,amount:1}
    /* console.log(`item ${id},${productitem}add to card`);
     */
    //console.log(newItem);
    const cartItem =cart.find((item) =>{
      return item.id === id;
    });
    if(cartItem){
      const newCart =[...cart].map(item =>{
        if(item.id === id){
          return{...item,amount:++cartItem.amount}
        } else{
          return item;
        }
      });
      setCart(newCart)
    }else{
      setCart([...cart,newItem])
    }
  };
  //console.log(cart)
  const removeFromCart=(id)=>{
    const newcart =cart.filter(item =>{
      return item.id !== id;
    })
    setCart(newcart)
  }
  return <CartContext.Provider value={{cart,addToCart,removeFromCart}}>

    {children}
  </CartContext.Provider>;
};

export default CartProvider;