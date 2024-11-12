import React, { useState } from "react";

const ItemCount = ({ stock, minimo, agregar }) => {
  const [count, setCount] = useState(minimo);

  const sumar = () => {
    if (count < stock) setCount(count + 1);
  };

  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  const sumarToCart = () => {
    agregar(count);
  };

  return (
    <div>
      <div>
        <button onClick={restar}>-</button>
        <span>{count}</span>
        <button onClick={sumar}>+</button>
      </div>
      <button onClick={sumarToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
