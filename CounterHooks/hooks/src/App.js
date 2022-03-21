import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {
  const [count, setCount] = useState(0)

  const incrementCount = ()=>{
       setCount( count + 1)
  }
  
  const decrementCount = ()=>{
      setCount(count - 1)
  }
  
  return (
    <>
    <h1>
        Counter = {count}
    </h1>
    <h2>
       count = {count}
    </h2>
    <button onClick={incrementCount}>+</button>
    <button onClick={decrementCount}>-</button>

    </>
  );
  
}

export default App;
