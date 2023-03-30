
import React, { createContext, useState } from 'react';
export const CartContext = createContext()
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

const [itemAmount,setItemAmount]=useState(0)
  const addToCart = (productitem, id) => {
    const newItem = { ...productitem, amount: 1 }
    /* console.log(`item ${id},${productitem}add to card`);
     */
    //console.log(newItem);

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
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
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

return <CartContext.Provider value={{itemAmount ,cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount }}>

    {children}
  </CartContext.Provider>;
};

export default CartProvider;