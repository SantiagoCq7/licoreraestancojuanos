import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo-nav.png';

function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-8 py-4">
      <div className="flex items-center space-x-4">
        <Link to="/">
        <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
        </Link>
      </div>
      <div className="flex items-center space-x-6 font-bold">
        <a href="#productos" className="hover:text-yellow-400">PRODUCTOS</a>
        <a href="#nosotros" className="hover:text-yellow-400">NOSOTROS</a>
        <a href="#servicios" className="hover:text-yellow-400">SERVICIOS</a>
        <Link to="/contact" className="border-2 text-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">
          CONTÁCTANOS
        </Link>
        <button className="bg-white text-2xl px-2 py-2 rounded-full hover:bg-yellow-400 transition">🛒</button>
      </div>
    </nav>
  );
}

export default Navbar;
