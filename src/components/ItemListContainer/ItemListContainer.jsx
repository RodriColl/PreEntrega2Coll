import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard'; 
import './ItemListContainer.css'; 


const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const productos = [
                { id: 1, name: "Pc AMD Ryzen 3 3200g 8Gb SSD 240", categoria: "PC Armadas", price: 260000, img: "https://www.venex.com.ar/products_images/1684782220_cp.jpg" },
                { id: 2, name: "Pc AMD Athlon 3000G SSD 240", categoria: "PC Armadas", price: 280000, img: "https://www.venex.com.ar/products_images/1599146602_pcamdathlon3000gssd240gb.jpg" },
                { id: 3, name: "Pc Intel i5 10400 SSD 240Gb 8Gb", categoria: "PC Armadas", price: 375000, img: "https://www.venex.com.ar/products_images/1618428298_pc-intel-i5-10400-ssd-240gb-8gb.jpg" },
                { id: 4, name: "Placa De Video Gigabyte Radeon RX 6500 XT Eagle 4G", categoria: "Componentes PC", price: 180000, img: "https://www.venex.com.ar/products_images/1668789563_gpu-1.png" },
                { id: 5, name: "Microprocesador Intel Core i3 10105F 4.4Ghz 6Mb LGA1200", categoria: "Componentes PC", price: 80000, img: "https://www.venex.com.ar/products_images/1623360341_1609357869_bx80701101005.jpg" },
                { id: 6, name: "Memoria Ram Notebook Hiksemi Hiker DDR3 4Gb 1600Mhz", categoria: "Componentes PC", price: 9000, img: "https://www.venex.com.ar/products_images/1706621762_ram-2.png" },
                { id: 7, name: "SILLA GAMER COOLERMASTER R2C COOLIN FABR", categoria: "Sillas", price: 452000, img: "https://mexx-img-2019.s3.amazonaws.com/Silla-Gamer-Cooler-Master-Caliber-R2C-Gris_48160_1.jpeg" },
                { id: 8, name: "SILLA GAMER RAIDMAX DK 925 NEGRA", categoria: "Sillas", price: 275000, img: "https://katech.com.ar/wp-content/uploads/x1-146-jpg.webp" },
                { id: 9, name: "SILLA GAMER COOLERMASTER BLACK HYBRID 1 ERGO", categoria: "Sillas", price: 680000, img: "https://katech.com.ar/wp-content/uploads/x1-815-jpg.webp" },
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
                    <ProductCard 
                        key={item.id} 
                        id={item.id} 
                        name={item.name} 
                        price={item.price} 
                        img={item.img} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
