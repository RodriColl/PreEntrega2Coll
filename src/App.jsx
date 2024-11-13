import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="¡Te damos la bienvenida a nuestra tienda!" />} />
                <Route path="/categoria/:categoryId" element={<ItemListContainer />} /> 
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
