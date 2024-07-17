import React, { useState } from "react"
import './ProductCard.css'

export default function ProductCard(props) {
  if (props.imagem) {
    return (
      <div className="caixa-produto">
        <h1 className="font-bold">Product Card</h1>
        <p>Descricao do produto</p>
        <p><img className="menor" src={props.imagem} /></p>
        <p>nome: {props.nome}</p>
        <p>preço: {props.preco}</p>
        <p>preço com desconto: {props.precoComDesconto}</p>
      </div>
    )
  }
  return (
    <div className="caixa-produto">
      <h1 className="font-bold">Product Card</h1>
      <p>Descricao do produto</p>
      <p><img className="menor" src="https://placehold.co/100x100" /></p>
      <p>nome: {props.nome}</p>
      <p>preço: {props.preco}</p>
      <p>preço com desconto: {props.precoComDesconto}</p>
    </div>
  )
}