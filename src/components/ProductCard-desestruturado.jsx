import React, { useState } from "react"
import './ProductCard.css'

export default function ProductCard({imagem, nome, preco, precoComDesconto}) {
  if (imagem) {
    return (
      <div className="caixa-produto">
        <h1 className="font-bold">Product Card</h1>
        <p>Descricao do produto</p>
        <p><img className="menor" src={imagem} /></p>
        <p>nome: {nome}</p>
        <p>preço: {preco}</p>
        <p>preço com desconto: {precoComDesconto}</p>
      </div>
    )
  }
  return (
    <div className="caixa-produto">
      <h1 className="font-bold">Product Card</h1>
      <p>Descricao do produto</p>
      <p><img className="menor" src="https://placehold.co/100x100" /></p>
      <p>nome: {nome}</p>
      <p>preço: {preco}</p>
      <p>preço com desconto: {precoComDesconto}</p>
    </div>
  )
}