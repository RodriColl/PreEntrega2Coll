import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <Link to="/" className="nav_name">DiTech</Link>
                </div>
                <ul className="nav_list">
                    <li>
                        <Link to="/category/pc-armadas" className="nav_link">PC Armadas</Link>
                    </li>
                    <li>
                        <Link to="/category/componentes-pc" className="nav_link">Componentes PC</Link>
                    </li>
                    <li>
                        <Link to="/category/sillas-gamers" className="nav_link">Sillas</Link>
                    </li>
                </ul>
                <div>
                    <Link to="/miCarrito"><CartWidget /></Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
