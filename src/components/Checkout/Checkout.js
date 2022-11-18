import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Checkout = () => { 
    const {cart, total} = useContext(CartContext)
 
    const createOrder = () => {
        const objOrder = {
            buyer:{ 
                name: 'Juan',
                phone: '095033422',
                email: 'contact@juan.io'
            },
            items: cart,
            total
        }
   }
    return (
        <>
         <h1>Checkout</h1>
         <button onClick={createOrder}>Agregar documento</button>
        </>
    )
}

export default Checkout