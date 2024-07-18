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
                id={1}
                imagem="https://d2ng48q17pwd8f.cloudfront.net/Custom/Content/Products/10/02/1002762_chuchu-400g-16569_m2_638129314573592802.png" 
                nome="Tenis1" 
                preco={30} 
                precoComDesconto={5} 
            />
            <ProductCard 
                id={2}
                nome="Tenis1" 
                preco={30} 
                precoComDesconto={2} 
            />
            <ProductCard 
                id={3}
                imagem="https://d2ng48q17pwd8f.cloudfront.net/Custom/Content/Products/10/02/1002762_chuchu-400g-16569_m2_638129314573592802.png" 
                preco={20}
            />
            <ProductCard 
                id={4}
                nome="Tenis1" 
                preco={30} 
                precoComDesconto={10}    
            />
            <ProductCard 
                id={5}
                imagem="https://d2ng48q17pwd8f.cloudfront.net/Custom/Content/Products/10/02/1002762_chuchu-400g-16569_m2_638129314573592802.png" 
                nome="Tenis1" 
                preco={30} 
                precoComDesconto={10}
            />
            
            <ProductCard 
                id={6}
                nome="Tenis1" 
                preco={30} 
                precoComDesconto={10}
            />
            
            <ProductCard 
                id={7}
                imagem="https://d2ng48q17pwd8f.cloudfront.net/Custom/Content/Products/10/02/1002762_chuchu-400g-16569_m2_638129314573592802.png"
                nome="Tenis1"
                preco={30}
                precoComDesconto={10}
            />
            
            <ProductCard 
                id={8}
                nome="Tenis1"
                preco={30}
                precoComDesconto={10}
            />
        
        </div>
    )
}