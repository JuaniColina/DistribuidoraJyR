import React from "react";

const Item = ({product}) => {
    return (
        <div style={{width: '18rem'}}>
            <img src={product.img} alt={product.name} style={{width:'18rem'}} />
            <div>
                <h5>{product.name}</h5>
                <p>{product.description}</p>
                <p>${product.price}</p>
            </div>
        </div>


    )
}

export default Item