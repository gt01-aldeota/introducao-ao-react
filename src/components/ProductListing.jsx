import React, { useEffect, useState } from 'react'
import ProductCard from "./ProductCard";
import './ProductListing.css'

export default function ProductListing() {
    const [listaDeProdutos, setListaDeProdutos] = useState(["1", 2, 3, 4, 5, 6, 7])
    const [produtoSelecionado, setProdutoSelecionado] = useState()

    useEffect(() => {
        fetch('https://63e7c552ac3920ad5be36b95.mockapi.io/produto')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setListaDeProdutos(json.map(item => item.id))
            })
    }, [])

    // foreach
    // map
    // filter
    // find

    return (
        <div
            className="lista-produtos"
        >
            {/* {listaDeProdutos.map(id=><ProductCard id={id} />)} */}

            {listaDeProdutos.map(id => <button style={{ backgroundColor: 'blue' }} onClick={()=>{setProdutoSelecionado(id)}}>Botao {id} setProdutoSelecionado({id})</button>)}
        <p>produtoSelecionado:{produtoSelecionado}</p>
            {produtoSelecionado && <ProductCard id={produtoSelecionado} />}
        </div>
    )
}