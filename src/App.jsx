import {  useState } from 'react';
import './App.css';

  

function  App() {

  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
 
 

  return (
    <>
      <div id="wrapper">
         
         <p>{count}</p>
        <button  onClick={increment}> Click Me </button>
        
       
       
      </div>

    </>
  )
}

export default App
