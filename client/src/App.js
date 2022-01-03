import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header />
    
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
