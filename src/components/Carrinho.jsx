import './Carrinho.css';
import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function Carrinho({itemsCarrinho}) {

    return <div className="relativo">
        <div className="absoluta">{itemsCarrinho.length}</div>
        <div className="carrinho">
            <ShoppingCart />
        </div>
    </div>
}