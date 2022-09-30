import { useState } from "react"

const Counter = () => {
    const initial = 0
    let [count, setCount] = useState (initial)
    
    const decrement = () =>{
        if(count > 0) {
        setCount(count - 1)
    }}
    const increment = () =>{
        setCount (count + 1)
     }
     const reset = () =>{
        setCount (initial)
     }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Restar</button>
            <button onClick={increment}>Sumar</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter