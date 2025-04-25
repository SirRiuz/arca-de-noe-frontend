import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Ecommerce from "./components/ecommerce/ecommerce";
import DogProductsSection from "./components/sección de productos perro/DogProductsSection";
import CatProductsSection from "./components/sección-de-gatos/seccion-de-gatos";
import OtherProductsSection from "./components/otras-secciones/otras-Secciones";
import { CartProvider } from './components/cart/CartContext';
import { ShoppingCart } from './components/cart/ShoppingCart';
import Footer from './components/footer/footer';
import CheckoutPage from './components/checkout/Checkout';
import { SearchProvider } from './components/SearchContext/SearchContext';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <SearchProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/reset-password" element={<ForgotPassword/>} />
              <Route path="/Ecommerce" element={<Ecommerce />} />
              <Route path="/Productos-perros" element={<DogProductsSection/>} />
              <Route path="/Productos-gatos" element={<CatProductsSection/>} />
              <Route path="/Otros-productos" element={<OtherProductsSection/>} />
              <Route path="/CheckoutPage" element={<CheckoutPage/>} />
            </Routes>
            <ShoppingCart />
            <Footer />
          </CartProvider>
        </SearchProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;