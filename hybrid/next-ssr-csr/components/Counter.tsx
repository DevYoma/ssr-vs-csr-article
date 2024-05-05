"use client"

import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(count + 1);
    }
  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={handleButtonClick}>Click Me</button>
    </div>
  )
}

export default Counter