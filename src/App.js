import './App.css';
//React State
import {useState, useEffect} from 'react'


function App() {
const [counter, setCounter] = useState(0);
useEffect( () => {
 // counter = 100; //never modify a state manually
  setCounter(100);

}, [counter]); // runs only counter is loaded
  return (
    <div className="App">
    <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
