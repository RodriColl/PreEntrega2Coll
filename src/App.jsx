import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} />
                <Route path="/categoria/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
        </Router>
    );
}

export default App;
