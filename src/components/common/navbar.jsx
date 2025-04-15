import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo-nav.png';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () =>{
  return (
    <nav className="bg-black text-white border-b-4 flex justify-between items-center px-8 py-4">
      <div className="flex items-center space-x-4">
        <Link to="/">
        <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
        </Link>
      </div>
      <div className="flex items-center space-x-6 font-bold">
        <a href="#productos" className="hover:text-yellow-400 hover:scale-110 transition">PRODUCTOS</a>
        <Link to="/about" className="hover:text-yellow-400 hover:scale-110 transition">NOSOTROS</Link>
        <a href="/services" className="hover:text-yellow-400 hover:scale-110 transition">SERVICIOS</a>
        <Link to="/contact" className="border-2 text-white rounded-full px-4 py-1 hover:bg-white hover:text-black hover:scale-110 transition">
          CONTÁCTANOS
        </Link>
        <FaShoppingCart className="w-8 h-8"></FaShoppingCart>
      </div>
    </nav>
  );
}

export default Navbar;
