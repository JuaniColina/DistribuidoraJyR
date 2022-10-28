import { useState } from "react"

const Counter = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count <= stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > initial){
            setCount(count - 1)
        }
    }

    return (
        <div>
            <p>{count}</p>
            <button onclick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button variant='success' onclick={() => onAdd(count)}>Comprar</button>
        </div>
    )
}

export default Counter