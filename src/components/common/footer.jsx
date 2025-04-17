import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
    <footer className="bg-black text-white pl-14 pr-10 py-10 pb-6 mt-3">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Logo + Redes */}
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        ESTANCO JUANO´S
        <br />
        <span className="text-base font-light">Distribuidora & Licorera</span>
      </h2>
      <div className="flex space-x-4">
        {/* Logos */}
        <a href="https://www.instagram.com/estanco_juanos_yd?igsh=ZXlua3phZTZrYjFo"
        target="_blank"
        rel="noopener noreferrer"
        >
          <FaInstagram alt="Instagram" className="w-8 h-8 hover:text-yellow-400 transition-colors" /></a>
        <a href="https://www.facebook.com/p/Estanco-Juanos-100076203282400/" 
        target="_blank" 
        rel="noopener noreferrer"
        >
          <FaFacebook alt="Facebook" className="w-8 h-8 hover:text-yellow-400 transition-colors" /></a>
        <a href="https://wa.me/573106286887?text=Hola%20quiero%20hacer%20un%20pedido"
        target="_blank"
        rel="noopener noreferrer"
        >
          <FaWhatsapp alt="WhatsaApp" className="w-8 h-8 hover:text-yellow-400 transition-colors" /></a>
      </div>
    </div>

    {/* Conoce más */}
    <div>
      <h3 className="font-semibold text-lg mb-4">Conoce más</h3>
      <ul className="space-y-2">
        <li><Link to="/about" className="text-base hover:text-yellow-400 transition-colors">Quienes Somos</Link></li>
        <li><a href="#" className="text-base hover:text-yellow-400 transition-colors">Productos para tu negocio</a></li>
        <li><a href="#" className="text-base hover:text-yellow-400 transition-colors">Servicios</a></li>
      </ul>
    </div>

    {/* Atención al cliente */}
    <div>
      <h3 className="font-semibold text-lg mb-4">Atención al cliente</h3>
      <ul className="space-y-2">
        <li><a href="https://wa.me/573106286887?text=Hola%20quiero%20hacer%20un%20pedido" className="text-base hover:text-yellow-400 transition-colors"><strong>Whatsapp</strong></a></li>
        <li><a href="tel:+573106286887" className="text-base hover:text-yellow-400 transition-colors">&#9990; 310 628 6887</a></li>
        <li><a href="mailto:estancojuanos@gmail.com" className="text-base hover:text-yellow-400 transition-colors">✉️ estancojuanos@gmail.com</a></li>
      </ul>
    </div>
    </div>

    <div className="text-center text-yellow-400 pt-14 mt-2">
        <p className="text-base">© 2023 Estanco Juano's. Todos los derechos reservados.</p>
    </div>
  </footer>
    );
}

export default Footer;