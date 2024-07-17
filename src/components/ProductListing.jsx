import React from 'react'
import ProductCard from "./ProductCard";
import './ProductListing.css'

export default function ProductListing() {
    return (
        <div
            className="lista-produtos"
            // style={{ display: 'flex' }}
        >
            <ProductCard 
                imagem="https://d2ng48q17pwd8f.cloudfront.net/Custom/Content/Products/10/02/1002762_chuchu-400g-16569_m2_638129314573592802.png" 
                nome="Tenis1" 
                preco={30} 
                precoComDesconto={10} 
            />
            <ProductCard 
                nome="Tenis2" 
                preco={20} 
            />
            <ProductCard 
                imagem="https://d2ng48q17pwd8f.cloudfront.net/Custom/Content/Products/10/02/1002762_chuchu-400g-16569_m2_638129314573592802.png" 
            />
            <ProductCard />
            <ProductCard />
            
            <ProductCard />
            
            <ProductCard />
            
            <ProductCard />
            
            <ProductCard />
            
            <ProductCard />
            
            <ProductCard />
        </div>
    )
}