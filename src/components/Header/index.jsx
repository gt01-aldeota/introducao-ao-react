import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="header">
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
                <a href="#register">Cadastre-se</a>
                <button className="login-btn">Entrar</button>
                <div className="cart-icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="cart-count">2</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
