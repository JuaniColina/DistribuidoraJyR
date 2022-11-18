import { useState, useEffect, useContext } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProductsByCategory } from "../../asyncMock"
import { getDocs, collection }  from 'firebase/firestore'
import { db } from "../../service/firebase"


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [ loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(() => {
        
        
        const collectionref = collection(db, 'products')
        
        getDocs(collectionref).then(response => {
             const productsAdapted = response.docs.map(doc => {
                const data = doc.data ()
                return { id: doc.id, ...data}
             })

             setProducts(productsAdapted)
        }).finally(() => {
            setLoading(false)
        })

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