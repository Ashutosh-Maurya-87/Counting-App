import logo from './logo.svg';
import './App.css';
import { useState } from 'react/cjs/react.production.min';

function App() {
  const count=0;
  const [countNew,setCount]=useState(count)
  const clickCount=()=>{
    console.log('you click');
  }
  return (
    <>
    <h1>{countNew}</h1>
    <button onClick={clickCount}>Click</button>
    </>
  );
}

export default App;
