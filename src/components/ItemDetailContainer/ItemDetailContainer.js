import { useEffect, useState } from "react"
//import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../service/firebase"


const ItemDetailContainer = (addItem) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productid} = useParams();
        console.log(productid)


    useEffect (() =>{

        const docRef = doc(db, 'products', productid)

        getDoc(docRef).then(doc => {
            const data = doc.data()
            
            const productsAdapted = {id: doc.id, ...data}
            setProduct(productsAdapted)
        }).catch(error => {

        }).finally(() => {
            setLoading(false)
        })


       // getProductById(productid).then(response => {
         //   setProduct(response)
       // }).finally(() => {
        //    setLoading(false)
        //})
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