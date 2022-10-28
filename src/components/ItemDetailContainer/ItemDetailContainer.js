import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = (addItem) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productid} = useParams();
        console.log(productid)


    useEffect (() =>{
        getProductById(productid).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productid])

    

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