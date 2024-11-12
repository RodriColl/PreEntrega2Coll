import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const agregarCarrito = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades de ${item.title} al carrito.`);
  };

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <h4>Precio: ${item.price}</h4>
      <ItemCount stock={item.stock} minimo={1} agregar={agregarCarrito} />
    </div>
  );
};

export default ItemDetail;
