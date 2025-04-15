import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
    <footer className="bg-black text-white px-7 mt-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Logo + Redes */}
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        ESTANCO JUANO´S
        <br />
        <span className="text-sm font-light">Distribuidora & Licorera</span>
      </h2>
      <div className="flex space-x-4">
        {/* Logos */}
        <a href="https://www.instagram.com/estanco_juanos_yd?igsh=ZXlua3phZTZrYjFo"
        target="_blank"
        rel="noopener noreferrer"
        >
          <FaInstagram alt="Instagram" className="w-8 h-8" /></a>
        <a href="https://www.facebook.com/p/Estanco-Juanos-100076203282400/" 
        target="_blank" 
        rel="noopener noreferrer"
        >
          <FaFacebook alt="Facebook" className="w-8 h-8" /></a>
        <a href="https://wa.me/573106286887?text=Hola%20quiero%20hacer%20un%20pedido"
        target="_blank"
        rel="noopener noreferrer"
        >
          <FaWhatsapp alt="WhatsaApp" className="w-8 h-8" /></a>
      </div>
    </div>

    {/* Conoce más */}
    <div>
      <h3 className="font-semibold mb-2">Conoce más</h3>
      <ul className="space-y-1 underline text-sm">
        <li><Link to="/about">Quienes Somos</Link></li>
        <li><a href="#">porductos para tu negocio</a></li>
        <li><a href="#">Servicios</a></li>

      </ul>
    </div>

    {/* Atención al cliente */}
    <div>
      <h3 className="font-semibold mb-2">Atención al cliente</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="https://wa.me/573106286887?text=Hola%20quiero%20hacer%20un%20pedido"><strong> Whatsapp</strong></a></li>
        <li><a href="tel:+573106286887">&#9990;3106286887</a></li>
        <li><a href="mailto:pqrs@dislicores.com">✉️ estancojuanos@gmail.com</a></li>
      </ul>
    </div>
    </div>

    <div className="text-center text-yellow-400 mt-10">
        <p className="text-sm">© 2023 Estanco Juano's. Todos los derechos reservados.</p>
    </div>
  </footer>
    );
}

export default Footer;