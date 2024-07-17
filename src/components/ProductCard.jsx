import React, { useState } from "react"
import './ProductCard.css'

export default function ProductCard(props) {
  const [carrinho, setCarrinho] = useState([])

  function adicionarAoCarrinho() {
    setCarrinho([...carrinho, {
      id: props.id,
      nome: props.nome,
      preco: props.preco,
      precoComDesconto: props.precoComDesconto
    }])
    console.log(carrinho)
  }

  function excluiDoCarrinho() {
    setCarrinho([])
  }

  function excluirItemDoCarrinho() {
    setCarrinho(carrinho.filter(item => item.id !== 5))
    console.log(carrinho)
  }

  if (props.imagem) {
    return (
      <div className="caixa-produto">
        <h1 className="font-bold">Product Card</h1>
        <p>Descricao do produto</p>
        <p><img className="menor" src={props.imagem} /></p>
        <p>nome: {props.nome}</p>
        <p>preço: {props.preco}</p>
        <p>preço com desconto: {props.precoComDesconto}</p>
        <button onClick={adicionarAoCarrinho}>Adicionar ao carrinho</button>
        <button onClick={excluirItemDoCarrinho}>Excluir item 5</button>
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
      <button onClick={adicionarAoCarrinho}>Adicionar ao carrinho</button>
      <button onClick={excluirItemDoCarrinho}>Excluir item 5</button>
    </div>
  )
}