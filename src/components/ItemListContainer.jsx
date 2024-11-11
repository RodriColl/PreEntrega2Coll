import React from 'react';
import './navBar.css';
import './cart.css';


const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <h1 className="saludo">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
