import React, { createContext, useState } from "react";

export const CartContext = createContext();


const CartProvider = ({ children }) => {

     const [cartArray, setCarArray] = useState([]);

     const addToCart = (product, count) => {
        console.log(`agregaste ${product.title}, cantidad: ${count}.`);

     }

     const value = {
        cartArray,
        addToCart
     }

    return (
        <CartContext.Provider value={value}>
          {children}
        </CartContext.Provider>
    )
}

export default CartProvider