import React, { useContext, useEffect, useState } from "react"
import './ProductCard.css'
import { CarrinhoContext } from "../App";

// props.id
export default function ProductCard({ id }) {
  const {carrinho, setCarrinho} = useContext(CarrinhoContext);

var [produto, setProduto] = useState({});

  useEffect(() => {
    fetch('https://63e7c552ac3920ad5be36b95.mockapi.io/produto/'+ id)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setProduto(json);
      })
  }, [id])

  if(!produto.preco) return <p>Carregando...</p>

  return (
    <div className="caixa-produto">
      <h1 className="font-bold">Product Card</h1>
      <p>Descricao do produto</p>
      {produto.imagem ?
        <div className="relativa">
          <div className="absoluta">
            <span style={{
              fontWeight: "bold",
              backgroundColor: 'yellow',
              borderRadius: '5px',
              padding: '1px',
            }}>30%</span> off
          </div>
          <img className="menor" src={produto.imagem} />
        </div> :
        <div><img className="menor" src="https://placehold.co/100x100" /></div>
      }
      <p>nome: {produto.nome}</p>
      {produto.precoComDesconto ? <p>preço: <span className="cinza">R$<s>{produto.preco}</s></span>  R$ {produto.precoComDesconto}</p> : <p>Preco: R${produto.preco}</p>}
      <button className="button bg-blue-500" onClick={()=>{setCarrinho([...carrinho, produto.id])}}>Adicionar Produto</button>
    </div>
  )
}