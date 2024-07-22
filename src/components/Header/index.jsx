import React, { useContext, useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CarrinhoContext } from '../../App';
import ProductCard from '../ProductCard';

const Header = () => {
    const { carrinho, setCarrinho } = useContext(CarrinhoContext);
    const [open, setOpen] = useState(false)
    return (
        <header className="header" style={{position:'relative'}}>
            <div className="logo">
                <img src="https://via.placeholder.com/40x40.png?text=DS" alt="Digital Store Logo" />
                <span>Digital Store</span>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Pesquisar produto..." />
                <button type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <nav className="nav-links">
                <a href="#home">Home</a>
                <a href="#products">Produtos</a>
                <a href="#categories">Categorias</a>
                <a href="#orders">Meus Pedidos</a>
            </nav>
            <div className="user-actions">
                <a href="/register">Cadastre-se</a>
                <button className="login-btn">Entrar</button>
                <div className="cart-icon" onClick={() => { setOpen(!open) }}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="cart-count">{carrinho.length}</span>
                </div>
                {open && 
                    <div className='' style={{position:'absolute', top:'100px', right: '20px', backgroundColor: 'fuchsia', padding:'20px', borderRadius: '20px', color: 'white'}}>
                    {carrinho.map((item) => <ProductCard id={item} />)}
                    </div>
                }

            </div>
        </header>
    );
}

export default Header;
