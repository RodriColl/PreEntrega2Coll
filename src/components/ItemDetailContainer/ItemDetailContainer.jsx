import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount';


const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [itemDetail, setItemDetail] = useState(null);

    useEffect(() => {
        const fetchItemDetail = async () => {
            const productos = [
                { id: 1, name: "Pc AMD Ryzen 3 3200g 8Gb SSD 240", descripcion: "PC ideal para uso hogareño y de oficina, excelente relación entre precio y potencia.", categoria: "PC Armadas", price: 260000, img: "https://www.venex.com.ar/products_images/1684782220_cp.jpg", stock: 5 },
                { id: 2, name: "Pc AMD Athlon 3000G SSD 240", descripcion: "PC ideal para uso hogareño y de oficina, excelente relación entre precio y potencia.", categoria: "PC Armadas", price: 280000, img: "https://www.venex.com.ar/products_images/1599146602_pcamdathlon3000gssd240gb.jpg", stock: 10 },
                { id: 3, name: "Pc Intel i5 10400 SSD 240Gb 8Gb", descripcion: "La PC ideal para una estación de trabajo rápida y eficiente. La mejor opción para tu oficina o estudio.", categoria: "PC Armadas", price: 375000, img: "https://www.venex.com.ar/products_images/1618428298_pc-intel-i5-10400-ssd-240gb-8gb.jpg", stock: 7 },
                { id: 4, name: "Placa De Video Gigabyte Radeon RX 6500 XT Eagle 4G", descripcion: "Reloj de memoria 18000 MHz, Tamaño de memoria 4 GB GDDR6", categoria: "Componentes PC", price: 180000, img: "https://www.venex.com.ar/products_images/1668789563_gpu-1.png", stock: 4 },
                { id: 5, name: "Microprocesador Intel Core i3 10105F 4.4Ghz 6Mb LGA1200", descripcion: "Cantidad de núcleos: 4, Frecuencia turbo máxima: 4,30 GHz", categoria: "Componentes PC", price: 80000, img: "https://www.venex.com.ar/products_images/1623360341_1609357869_bx80701101005.jpg", stock: 5 },
                { id: 6, name: "Memoria Ram Notebook Hiksemi Hiker DDR3 4Gb 1600Mhz", descripcion: "Frecuencia: 1600 MHz, Capacidad 4GB", categoria: "Componentes PC", price: 9000, img: "https://www.venex.com.ar/products_images/1706621762_ram-2.png", stock: 6 },
                { id: 7, name: "SILLA GAMER COOLERMASTER R2C COOLIN FABR", descripcion: "Capacidad de peso: 150 kg", categoria: "Sillas", price: 452000, img: "https://mexx-img-2019.s3.amazonaws.com/Silla-Gamer-Cooler-Master-Caliber-R2C-Gris_48160_1.jpeg", stock: 3 },
                { id: 8, name: "SILLA GAMER RAIDMAX DK 925 NEGRA", descripcion: "Capacidad de peso: 150 kg", categoria: "Sillas", price: 275000, img: "https://katech.com.ar/wp-content/uploads/x1-146-jpg.webp", stock: 2 },
                { id: 9, name: "SILLA GAMER COOLERMASTER BLACK HYBRID 1 ERGO", descripcion: "Capacidad de peso: 150 kg", categoria: "Sillas", price: 680000, img: "https://katech.com.ar/wp-content/uploads/x1-815-jpg.webp", stock: 4 },
            ];

            const item = productos.find((producto) => producto.id === parseInt(itemId));
            setItemDetail(item);
        };

        fetchItemDetail();
    }, [itemId]);

    const onAdd = (cantidad) => {
        console.log(`Se agregaron ${cantidad} unidades del producto: ${itemDetail.name}`);
    };

    return (
        <div className="container">
            {itemDetail ? (
                <div className="item-detail">
                    <h2 className="nombreProducto">{itemDetail.name}</h2>
                    {/* Mostrar imagen del producto */}
                    <img 
                        src={itemDetail.img} 
                        alt={itemDetail.name} 
                        className="item-detail-image" 
                    />
                    <p className="descripcion">{itemDetail.descripcion}</p>
                    {/* <p className="categoria"><strong>Categoría:</strong> {itemDetail.categoria}</p> */}
                    <p className="price"><strong>Precio:</strong> ${itemDetail.price}</p>
                    <ItemCount stock={itemDetail.stock} initial={1} onAdd={onAdd} />
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
