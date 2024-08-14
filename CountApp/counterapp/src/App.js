import {useState} from 'react'
import './App.css';

function App() {
  const [counter, setCount] = useState(0);

  const artir = () => {
    setCount(counter + 1);
  }
  const sıfırla = () => {
    setCount(0)
  }
  const azalt = () => {
    setCount(counter - 1);
  }
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <h1>Counter App</h1>
    <h1 style={{
      fontSize:50
    }}>{counter}</h1>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
    }}>
      <button onClick={artir} style={{
        fontSize: 50,
        borderRadius: 25,color: 'white',
        background: 'black'
      }}>+</button>
      <button onClick={sıfırla} style={{
        fontSize: 50,
        borderRadius: 25,
        color: 'white',
        background: 'black'
      }}>0</button>
      <button onClick={azalt} style={{ 
        fontSize: 50,
        borderRadius: 25,
        color: 'white',
        background: 'black'          
      }}>-</button>
    </div>
  </div>
}

export default App;
