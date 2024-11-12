import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [itemDetail, setItemDetail] = useState(null);

    useEffect(() => {
        const fetchItemDetail = async () => {
            const productos = [
                { id: 1, name: "Pc AMD Ryzen 3 3200g 8Gb SSD 240", descripcion:"PC ideal para uso hogareño y de oficina, excelente relación entre precio y potencia.", categoria: "PC Armadas", price: 200, stock: 5 },
                { id: 2, name: "Pc AMD Athlon 3000G SSD 240", descripcion:"PC ideal para uso hogareño y de oficina, excelente relación entre precio y potencia.", categoria: "PC Armadas" },
                { id: 3, name: "Pc Intel i5 10400 SSD 240Gb 8Gb", descripcion:"La PC ideal para una estación de trabajo rápida, eficiente y duradera. La mejor opción para tu oficina o estudio. Instalá los programas necesarios y aumentá tu productividad. Hacé todo más rápido con la tecnología SSD", categoria: "PC Armadas" },
                { id: 4, name: "Placa De Video Gigabyte Radeon RX 6500 XT Eagle 4G", descripcion:"-Procesamiento de gráficos: Radeon™ RX 6500 XT -Reloj de la memoria: 18000 MHz -Tamaño de la memoria: 4 GB -Tipo de memoria: GDDR6", categoria: "Componentes PC" },
                { id: 5, name: "Microprocesador Intel Core i3 12100 Alderlake 4.30Ghz LGA1700", descripcion: "Cantidad de núcleos: 4 Número de Performance-cores: 4 Cantidad de subprocesos: 8 Frecuencia turbo máxima:  4,30 GHz Caché: 12 MB", categoria: "Componentes PC" },
                { id: 6, name: "Memoria Ram Notebook Hiksemi Hiker DDR3 4Gb 1600Mhz", descripcion:"-Frecuencia: 1600 MHz, Capacidad 4GB", categoria: "Componentes PC" },
                { id: 7, name: "SILLA GAMER COOLERMASTER R2C COOLIN FABR", descripcion:"Marco de acero completo Altura y reposabrazos regulables, Almohadas lumbares y reposacabezas, Asiento de espuma moldeada en frío, Capacidad de peso: 150 kg", categoria: "Sillas" },
                { id: 8, name: "SILLA GAMER RAIDMAX DK 925 NEGRA", descripcion:"Marco de acero completo Altura y reposabrazos regulables, Almohadas lumbares y reposacabezas, Asiento de espuma moldeada en frío, Capacidad de peso: 150 kg", categoria: "Sillas" },
                { id: 9, name: "SILLA GAMER COOLERMASTER BLACK HYBRID 1 ERGO", descripcion:"Marco de acero completo Altura y reposabrazos regulables, Almohadas lumbares y reposacabezas, Asiento de espuma moldeada en frío, Capacidad de peso: 150 kg", categoria: "Sillas" },
            ];

            const item = productos.find(item => item.id === parseInt(itemId));
            setItemDetail(item);
        };

        fetchItemDetail();
    }, [itemId]);

    return (
        <div className="container">
            {itemDetail ? (
                <>
                    <h2 className="nombreProducto">{itemDetail.name}</h2>
                    <p>{itemDetail.descripcion}</p>
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
