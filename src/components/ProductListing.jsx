import React, { useEffect, useState } from 'react'
import ProductCard from "./ProductCard";
import './ProductListing.css'

export default function ProductListing() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://63e7c552ac3920ad5be36b95.mockapi.io/produto');
                const json = await res.json();
                console.log(json);
                setProdutos(json);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <div className='mb-10 border'>
                <h1 className="font-bold">Product Listing</h1>
            </div>
            <div className="caixa-produtos">
                {produtos.map(produto => <ProductCard key={produto.id} id={produto.id} />)}
            </div>
        </div>
    )
}
