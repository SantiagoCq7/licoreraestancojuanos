// src/components/layout/Header.jsx
import React from 'react';
import { Link,useLocation } from "react-router-dom";
import logo from "../../assets/images/logo-nav.png";
import { FaShoppingCart } from "react-icons/fa";

function Header({ onCartClick }) {
    const location = useLocation();

    // Función para determinar si un enlace está activo
    const isActive = (path) => {
      return location.pathname === path;
    };
  
    return (
      <nav className="bg-black text-white border-b-4 flex justify-between items-center px-8 py-4">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
        </div>
        <div className="flex items-center space-x-6 font-bold text-sm">
          <Link
            to="/"
            className={`hover:text-yellow-400 hover:scale-110 transition pb-1 ${
              isActive("/") ? "border-b-2 border-white" : ""
            }`}
          >
            INICIO
          </Link>
          <Link
            to="/product"
            className={`hover:text-yellow-400 hover:scale-110 transition pb-1 ${
              isActive("/product") ? "border-b-2 border-white" : ""
            }`}
          >
            PRODUCTOS
          </Link>
          <Link
            to="/about"
            className={`hover:text-yellow-400 hover:scale-110 transition pb-1 ${
              isActive("/about") ? "border-b-2 border-white" : ""
            }`}
          >
            NOSOTROS
          </Link>
          <Link
            to="/services"
            className={`hover:text-yellow-400 hover:scale-110 transition pb-1 ${
              isActive("/services") ? "border-b-2 border-white" : ""
            }`}
          >
            SERVICIOS
          </Link>
          <Link
            to="/contact"
            className="border-2 text-white rounded-full px-4 py-1 hover:bg-white hover:text-black hover:scale-110 transition"
          >
            CONTÁCTANOS
          </Link>
        </div>
      <button
        onClick={onCartClick}
        className="relative bg-black p-3 rounded-full hover:bg-yellow-400"
      >
        <FaShoppingCart className="w-6 h-6" />
      </button>
    </nav>
  );
}

export default Header;
