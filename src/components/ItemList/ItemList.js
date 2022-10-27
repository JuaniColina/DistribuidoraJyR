import {Link} from 'react-router-dom'

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
          <ul style={{display: 'flex', flexDirection: 'column'}} onClick={handleClick}>
            {products.map(product => <Link to={`/detail/${product.id}`} key={product.id}>{product.name}</Link>)}
          </ul>
        </div>
    )
}

export default ItemList

