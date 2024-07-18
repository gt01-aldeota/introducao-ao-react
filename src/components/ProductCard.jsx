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
  return (
    <div className="caixa-produto">
      <h1 className="font-bold">Product Card</h1>
      <p>Descricao do produto</p>
      {props.imagem ?
      <div className="relativa">
        <div className="absoluta">
          <span style={{
            fontWeight: "bold",
            backgroundColor: 'yellow',
            borderRadius: '5px',
            padding: '1px',
          }}>30%</span> off
        </div>
        <img className="menor" src={props.imagem} />
      </div> : 
      <div><img className="menor" src="https://placehold.co/100x100" /></div>
      }
      <p>nome: {props.nome}</p>
      {props.precoComDesconto ? <p>preço: <span className="cinza">R$<s>{props.preco}</s></span> / R$ {props.precoComDesconto}</p>: <p>Preco: R${props.preco}</p>}
      <p className={props.preco < 30 ? "verde": "vermelho"}>Preco: R$ {props.preco}</p>
      <button onClick={adicionarAoCarrinho}>Adicionar ao carrinho</button>
      <button onClick={excluirItemDoCarrinho}>Excluir item 5</button>
    </div>
  )
}