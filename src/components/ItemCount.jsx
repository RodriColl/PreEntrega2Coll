import React, { useState } from "react";
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (stock > count) setCount(count + 1);
  };

  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  const agregarCantidad = () => {
    onAdd(count);
  };

  return (
    <div className="contador">
      <div>
        <button className="resta" onClick={restar}>-</button>
        <span>{count}</span>
        <button className="suma" onClick={sumar}>+</button>
      </div>
      <button className="agregar" onClick={agregarCantidad}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
