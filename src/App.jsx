import {  useState } from 'react';
import './App.css';
import Loggedin from './Components/Loggedin.jsx';
import Loggedout from './Components/Loggedout.jsx';

  

function  App() {

  const loggedin = true;
  

  
 
 

  return (
    <>
          
          {loggedin === true ? <Loggedin /> : <Loggedout />}
    </>
  )
}

export default App
