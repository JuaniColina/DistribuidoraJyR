import { Link } from "react-router-dom"
import cartIcon from "./carritodistri.png"

const CartWidget = () => {
    return (
      <Link to ='/cart'>
        <img src={cartIcon} alt='carrito' style={{width:'8rem', height:'4rem', marginLeft:'3rem'}}/>
      </Link>
        
    )
}

export default CartWidget