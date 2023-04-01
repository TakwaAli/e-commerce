
import React, { createContext, useEffect, useState } from 'react';
export const CartContext = createContext()
const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);
const [itemAmount,setItemAmount]=useState(0)
const [total,settotal]=useState(0);
useEffect(()=>{
  
  const total =cart.reduce((accumulator,currentItem)=>{
    return accumulator + currentItem.price*currentItem.amount;
  },0)
  settotal(total)

})

useEffect(()=>{
if (cart) {
  const amount =cart.reduce((accumulator,currentItem)=>{
    return accumulator + currentItem.amount;
  },0)
  setItemAmount(amount)
}
},[cart])
  const addToCart = (productitem, id) => {
    const newItem = { ...productitem, amount: 1 }
   

    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return { ...item, amount: ++cartItem.amount }
        } else {
          return item;
        }
      });
      
     localStorage.setItem('cart',JSON.stringify(setCart(newCart)))
    } else {
      localStorage.setItem('cart',JSON.stringify(setCart([...cart, newItem])))
    }
  };
  //console.log(cart)
  const removeFromCart = (id) => {
    const newcart = cart.filter(item => {
      return item.id !== id;
    })
    setCart(newcart)
  };
  const clearCart = () => {
    setCart([])
  }

  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id)
  }

  const decreaseAmount = (id) => {
    const CartItem = cart.find((item) => {
      return item.id === id
    });
    if (CartItem) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return { ...item, amount: CartItem.amount-1 }
        }
        else {
          return item;
        }
      });
      setCart(newCart);
    }
   
      if (CartItem.amount < 2) {
        removeFromCart(id)
      }
    
  }

return <CartContext.Provider value={{itemAmount ,cart, addToCart, removeFromCart,
 clearCart, increaseAmount, decreaseAmount,total }}>

    {children}
  </CartContext.Provider>;
};

export default CartProvider;