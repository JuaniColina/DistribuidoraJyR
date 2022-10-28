import {Link} from 'react-router-dom'
import Item from '../Item/Item'

const ItemList = ({ products }) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('hice click en item list')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {

    }
    return (
        <div>
          <ul style={{display: 'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}} onClick={handleClick}>
            {products.map(product => <Link to={`/detail/${product.id}`} key={product.id}><Item product={product}/></Link>)}
          </ul>
        </div>
    )
}

export default ItemList

