import {useState} from 'react'
import './counterApp.css'



export const conterApp = () => {

    const [count, setCount] = useState(0)

  return (
    <>
        <h1>Counter App</h1>
        <h1>{count}</h1>
        <div className="buttonlar">
            <button onClick={() => {setCount(count + 1)}}>+</button>
            <button onClick={() => setCount(0)}>0</button>
            <button onClick={() => {setCount(count - 1)}}>-</button>
        </div>
    </>
  )
}

export default conterApp;