import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemListContainer.css';  // Asegúrate de importar el CSS

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const productos = [
                { id: 1, name: "Pc AMD Ryzen 3 3200g 8Gb SSD 240", categoria: "PC Armadas", price: 200, img: "https://via.placeholder.com/150" },
                { id: 2, name: "Pc AMD Athlon 3000G SSD 240", categoria: "PC Armadas", price: 150, img: "https://via.placeholder.com/150" },
                { id: 3, name: "Pc Intel i5 10400 SSD 240Gb 8Gb", categoria: "PC Armadas", price: 300, img: "https://via.placeholder.com/150" },
                { id: 4, name: "Placa De Video Gigabyte Radeon RX 6500 XT Eagle 4G", categoria: "Componentes PC", price: 250, img: "https://via.placeholder.com/150" },
                { id: 5, name: "Microprocesador Intel Core i3 12100 Alderlake 4.30Ghz LGA1700", categoria: "Componentes PC", price: 180, img: "https://via.placeholder.com/150" },
                { id: 6, name: "Memoria Ram Notebook Hiksemi Hiker DDR3 4Gb 1600Mhz", categoria: "Componentes PC", price: 100, img: "https://via.placeholder.com/150" },
                { id: 7, name: "SILLA GAMER COOLERMASTER R2C COOLIN FABR", categoria: "Sillas", price: 150, img: "https://via.placeholder.com/150" },
                { id: 8, name: "SILLA GAMER RAIDMAX DK 925 NEGRA", categoria: "Sillas", price: 180, img: "https://via.placeholder.com/150" },
                { id: 9, name: "SILLA GAMER COOLERMASTER BLACK HYBRID 1 ERGO", categoria: "Sillas", price: 200, img: "https://via.placeholder.com/150" },
            ];

            const producto = categoryId
                ? productos.filter(item => item.categoria === categoryId)
                : productos;

            setItems(producto);
        };

        fetchData();
    }, [categoryId]);

    return (
        <div className="container">
            <h1 className="saludo">{greeting}</h1>
            <div className="card-container">
                {items.map(item => (
                    <div key={item.id} className="product-card">
                        <Link to={`/item/${item.id}`} className="card-link">
                            <img src={item.img} alt={item.name} className="card-image" />
                            <div className="card-content">
                                <h3 className="product-name">{item.name}</h3>
                                <p className="product-price">${item.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
