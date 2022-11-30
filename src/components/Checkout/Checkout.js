import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../service/firebase/index"
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
        
        const collectionRef = collection(db, 'orders')
        addDoc(collectionRef, objOrder)
   }
    return (
        <>
         <h1>Checkout</h1>
         <button onClick={createOrder}>Agregar documento</button>
        </>
    )
}

export default Checkout