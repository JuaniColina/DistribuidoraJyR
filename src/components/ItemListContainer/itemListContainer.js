import { useState, useEffect, useContext } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProductsByCategory } from "../../asyncMock"
import { CartContext } from "../../context/CartContext"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [ loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(() => {
    if(!categoryId) {
        getProducts().then(res => {
            setProducts(res)
        }).catch(error => {
            console.log(error)
            setError(true)
        }).finally(() => {
            setLoading(false)
        })
    }else {
        getProductsByCategory(categoryId).then(res => {
            setProducts(res)
        }).catch(error => {
            console.log(error)
            setError(true)
        }).finally(() => {
            setLoading(false)
        })
    }
    }, [categoryId])

    

    
    if (loading) {
        return <h1>Cargando...</h1>
    }

    if (error) {
        return <h1>Hubo un error</h1>
    }
    

    return (
        <div className="itemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer