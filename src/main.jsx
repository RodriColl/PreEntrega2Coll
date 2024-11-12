import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar/navBar.css'
import './components/CartWidget/cart.css'
import './components/ItemDetailContainer/ItemDetailContainer.css'
import './components/ItemListContainer/ItemListContainer.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
