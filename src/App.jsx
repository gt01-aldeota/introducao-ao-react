import Header from "./components/Header"
import './App.css'
import React, { createContext, useState } from 'react'
import ProductListing from "./components/ProductListing";
import Chuchu, { ComponenteUm, ComponenteDois, ComponenteTres } from "./components/AllComponents.jsx";

// Criando o contexto
export const CarrinhoContext = createContext();

export function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <div>
      <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
        <Header />
        <ProductListing />
        <ComponenteUm />
        <ComponenteDois />
        <ComponenteTres />
      </CarrinhoContext.Provider>
      <Chuchu />
    </div>
  )
}