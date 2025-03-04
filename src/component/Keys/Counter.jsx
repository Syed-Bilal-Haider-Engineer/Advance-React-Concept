import React, { useState } from 'react'

function Counter({title}) {
    const [count,setCount] = useState(0);
  return (
    <>
    <div>{title} {count}</div>
    <button onClick={()=> setCount((prev) => prev + 1)}>Increment</button>
    </>
  )
}

export default Counter