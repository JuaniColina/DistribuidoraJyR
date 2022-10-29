import React, { useContext, Link } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";


const CartContainer = () => {

    const { cartArray, deleteItem } = useContext(CartContext)

 //   if (cartArray.length === 0) {
 //       return (
 //           <div>
 //               <p>No hay productos aun</p>
 //               <Link to='/'>Ir al Inicio</Link>
 //           </div>
 //           
 //       )
 //   }

    return (
        <div>
            {cartArray.length === 0 &&
              <div>
                <p>No hay productos aun</p>
                <Link to='/'>Ir al Inicio</Link>
              </div>
         }
            {(cartArray.length > 0) && cartArray.map(prod => <CartItem key={prod.item.id} product={prod} deleteItem={deleteItem} /> )}
        </div>
    )
}

export default CartContainer