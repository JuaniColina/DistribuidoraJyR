import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";


const CartContainer = () => {

    const { cartArray, deleteItem } = useContext(CartContext)



    return (
        <div>
            {cartArray.map(prod => <CartItem key={prod.item.id} product={prod} deleteItem={deleteItem} /> )}
        </div>
    )
}

export default CartContainer