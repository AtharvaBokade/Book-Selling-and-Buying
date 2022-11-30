import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import React from 'react';
import Home from './components/home/home';
import Buy from './components/buy/buy';
function App() {
  return (
    
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/buy' element={<Buy/>}></Route>
  
  
   </Routes>
 

  );
}

export default App;
