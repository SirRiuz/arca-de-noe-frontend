import React, { useState } from 'react';

import { 
  Search, 
  Store, 
  Person, 
  Pets, 
  BrandingWatermark, 
  LocalOffer, 
  Pets as Services, 
  CalendarToday,
  ShoppingCart
} from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';
import './Navbar.css';

const Navbar = () => {
  const [cartItems] = useState(3); // Ejemplo con 3 items en el carrito

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            <span className="logo-icon">🐾</span>
            <span className="logo-text">Puppis</span>
          </a>
          
          <div className="search-bar">
            <Search className="search-icon" />
            <input 
              type="text" 
              placeholder="Buscar alimentos, marcas, mascotas..." 
              className="search-input"
            />
          </div>
          
          <div className="top-menu">
            <a href="#">
              <Store fontSize="small" className="menu-icon" />
              <span>Sucursales</span>
            </a>
            <a href="#">
              <Person fontSize="small" className="menu-icon" />
              <span>Mi cuenta</span>
            </a>
            <IconButton className="cart-button" color="inherit">
              {/* <Badge badgeContent={cartItems} color="error"> */}
                <ShoppingCart />
              {/* </Badge> */}
            </IconButton>
          </div>
        </div>
      </nav>

      {/* SNABVAR 2 */}
      
      <nav className="main-menu">
        <ul>
          <li>
            <a href="#">
              <Pets fontSize="small" className="menu-icon" />
              <span>Mascotas</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BrandingWatermark fontSize="small" className="menu-icon" />
              <span>Marcas</span>
            </a>
          </li>
          <li>
            <a href="#">
              <LocalOffer fontSize="small" className="menu-icon" />
              <span>Ofertas</span>
            </a>
          </li>
          <li>
            <a href="#">
              <Services fontSize="small" className="menu-icon" />
              <span>Servicios</span>
            </a>
          </li>
          <li>
            <a href="#">
              <CalendarToday fontSize="small" className="menu-icon" />
              <span>Envío programado</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );

};

export default Navbar;