import './App.css';
//React State
import {useState} from 'react'


function App() {
const [counter, setCounter] = useState(0);
  return (
    <div className="App">
    <button>-</button>
      <h1>{counter}</h1>
      <button>+</button>
    </div>
  );
}

export default App;
