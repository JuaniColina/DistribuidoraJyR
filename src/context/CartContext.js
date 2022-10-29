import React, { createContext, useState } from "react";

export const CartContext = createContext();


const CartProvider = ({ children }) => {

     const [cartArray, setCartArray] = useState([]);
     const [totalCount, setTotalCount] = useState(0);
     

     const addToCart = (product, count) => {
        if(isInCart(product.id)){
        }else {
            console.log(`agregaste ${product.title}, cantidad: ${count}.`);
        const newObj = {
            item: product,
            count
        }
        setCartArray([...cartArray, newObj])
        }
     }

     const deleteItem = (id) => {
        const updatedCart = cartArray.filter(element => element.item.id !== id);
        setCartArray(updatedCart);
     }

     const clearCart = () => {
        setCartArray([]);
     }

     const isInCart = (id) => {
         return cartArray.some(element => element.item.id === id);
     }

     
     

     console.log(totalCount);

     const value = {
        cartArray,
        addToCart,
        deleteItem,
        clearCart
     }

    return (
        <CartContext.Provider value={value}>
          {children}
        </CartContext.Provider>
    )
}

export default CartProvider
