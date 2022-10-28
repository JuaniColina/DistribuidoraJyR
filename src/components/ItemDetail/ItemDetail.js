import { useContext, useState } from "react";
import Counter from "../counter/counter"
import { CartContext } from "../../context/CartContext"
const ItemDetail = ({product}) => {
    
    const {addToCart} = useContext(CartContext);

    const [added, setAdded] = useState(false)

    function onAdd(count) {
        addToCart(product, count);
        setAdded(true);
    }
    
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {product?.name}
                </h2>
            </header>
            <picture>
                <img src={product?.img} alt={product?.name} className="ItemImg" style={{width:'18rem'}}/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {product?.category}
                </p>
                <p className="Info">
                    Descripcion: {product?.description}
                </p>
                <p className="Info">
                    Precio: {product?.price}
                </p>
            </section>
            <Counter initial={1} stock={product?.stock} onAdd={onAdd}/>
            
        </article>
        
    )
    
}

export default ItemDetail