// src/components/ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // Opcional, si deseas estilos separados

const ProductCard = ({ id, name, price, img }) => {
    return (
        <div className="product-card">
            <Link to={`/item/${id}`} className="card-link">
                <img src={img} alt={name} className="card-image" />
                <div className="card-content">
                    <h3 className="product-name">{name}</h3>
                    <p className="product-price">${price}</p>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
