import Header from "./components/Header"
import './App.css'
import React, { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import ProductListing from "./components/ProductListing";
import Chuchu, { ComponenteUm, ComponenteDois, ComponenteTres } from "./components/AllComponents.jsx";
import Register from "./components/Register";

// Criando o contexto
export const CarrinhoContext = createContext();

export function App() {
  const [carrinho, setCarrinho] = useState([]);

  // return (
  //   <div>
  //     <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
  //       <Header />
  //       <ProductListing />
  //       <ComponenteUm />
  //       <ComponenteDois />
  //       <ComponenteTres />
  //     </CarrinhoContext.Provider>
  //     <Chuchu />
  //   </div>
  // )

  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
      <Routes>
        <Route path="/" element={<>
          <Header />
          <ProductListing />
          <ComponenteUm />
          <ComponenteDois />
          <ComponenteTres />
        </>
        } />
        <Route path="/chuchu" element={<Chuchu />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lista-de-produtos" element={<ProductListing />} />
      </Routes>
    </CarrinhoContext.Provider>
  )
}