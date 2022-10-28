import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
         
        <nav style={{display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: 'green'}}>
            <div>
                <Link to='/'>
                <h1>Distribuidora JyR</h1>
                </Link>
                
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems:'center'}}>
                <Link to='/category/Cafe' class="btn btn-primary">Capsulas Dolce gusto</Link>
                <Link to='/category/Golosinas' class="btn btn-primary">Golosinas</Link>
                <Link to='/category/Alcohol' class="btn btn-primary">Alcohol</Link>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default Navbar 