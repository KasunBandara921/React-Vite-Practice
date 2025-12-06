import {  useState } from 'react';
import './App.css';
import Loggedin from './Components/Loggedin.jsx';
import Loggedout from './Components/Loggedout.jsx';

  

function  App() {

  const loggedin = true;
  const names = ['Alice', 'Bob'];

  
 
 

  return (
    <>
          {loggedin && <Loggedin />}
          {!loggedin && <Loggedout />}
    </>
  )
}

export default App
