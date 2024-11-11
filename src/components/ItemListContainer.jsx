import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const prodcutos = [
                { id: 1, name: "Pc AMD Ryzen 3 3200g 8Gb SSD 240", categoria: "PC Armadas" } ,
                { id: 2, name: "Pc AMD Athlon 3000G SSD 240", categoria: "PC Armadas" },
                { id: 3, name: "Pc Intel i5 10400 SSD 240Gb 8Gb", categoria: "PC Armadas" },
                { id: 4, name: "Placa De Video Gigabyte Radeon RX 6500 XT Eagle 4G", categoria: "Componentes PC" },
                { id: 5, name: "Microprocesador Intel Core i3 12100 Alderlake 4.30Ghz LGA1700", categoria: "Componentes PC" },
                { id: 6, name: "Memoria Ram Notebook Hiksemi Hiker DDR3 4Gb 1600Mhz", categoria: "Componentes PC" },
                { id: 7, name: "SILLA GAMER COOLERMASTER R2C COOLIN FABR", categoria: "Sillas" },
                { id: 8, name: "SILLA GAMER RAIDMAX DK 925 NEGRA", categoria: "Sillas" },
                { id: 9, name: "SILLA GAMER COOLERMASTER BLACK HYBRID 1 ERGO", categoria: "Sillas" },
            ];

            const producto = categoryId
                ? prodcutos.filter(item => item.categoria === categoryId)
                : prodcutos;

            setItems(producto);
        };

        fetchData();
    }, [categoryId]);

    return (
        <div className="container">
            <h1 className="saludo">{greeting}</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <Link to={`/item/${item.id}`} className='listado'>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemListContainer;
