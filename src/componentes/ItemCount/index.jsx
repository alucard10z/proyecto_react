
import "./styles.css"

import React,{useState} from 'react';


export const ItemCount =() =>{

  const restar = () => {
    
    
    setCount(count - 1);

  }
  const sumar = () => {
    
    
    setCount(count + 1);

  }

  const [count, setCount] = useState(1);

  return (
    <div className='counter'>
        <button disabled={count <= 1} onClick={restar}>-</button>
        <span>{count}</span>
        <button disabled={count>= 5} onClick={sumar}>+</button>
        <div>
            <button>agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount