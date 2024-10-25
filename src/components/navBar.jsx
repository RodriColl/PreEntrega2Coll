import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <a href="#" className="nav_name">DiTech</a>
                </div>
                <ul className="nav_list">
                    <li>
                        <a href="/productos" className="nav_link">Productos</a>
                    </li>
                    <li>
                        <a href="/Nosotros" className="nav_link">Nosotros</a>
                    </li>
                    <li>
                        <a href="/contacto" className="nav_link">Contacto</a>
                    </li>
                </ul>
                <div>
                    <a href="/miCarrito"><CartWidget /></a>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
