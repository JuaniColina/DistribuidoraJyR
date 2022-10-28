import { useContext, useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { CartContext } from "../../context/CartContext"

const ItemDetailContainer = (addItem) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productid} = useParams();

    const {addToCart} = useContext(CartContext);

    const [added, setAdded] = useState(false)

    useEffect (() =>{
        getProductById(productid).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productid])

    const onAdd = (count) => {
        addToCart(product, count);
        setAdded(true);
    }

    if (loading) {
        return <h1>Cargando...</h1>
    }

    

    return (
        <div>
            <h1>Detalle de productos</h1>
            <ItemDetail product={product}/>
        </div> 
    ) 
}

export default ItemDetailContainer