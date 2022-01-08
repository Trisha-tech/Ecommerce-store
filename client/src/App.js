import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import DetailView from './components/ItemDetails/DetailView'

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
    <BrowserRouter>
      <Header />
 
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/product/:id" element={<DetailView/>} />
      </Routes>
    </BrowserRouter>
    </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
