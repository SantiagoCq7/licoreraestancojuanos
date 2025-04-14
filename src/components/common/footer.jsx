import React from "react";

function Footer() {
    return (
    <footer className="bg-black text-white px-7 mt-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Logo + Redes */}
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        ESTANCO JUANO´S
        <br />
        <span className="text-sm font-light">Distribuidora - Licorera</span>
      </h2>
      <div className="flex space-x-4">
        <a href="#"><img src="/icons/youtube.svg" alt="YouTube" className="w-6 h-6" /></a>
        <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" /></a>
        <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" /></a>
        <a href="#"><img src="/icons/tiktok.svg" alt="TikTok" className="w-6 h-6" /></a>
      </div>
    </div>

    {/* Conoce más */}
    <div>
      <h3 className="font-semibold mb-2">Conoce más</h3>
      <ul className="space-y-1 underline text-sm">
        <li><a href="#">Quienes Somos</a></li>
        <li><a href="#">porductos para tu negocio</a></li>
        <li><a href="#">Servicios</a></li>

      </ul>
    </div>

    {/* Atención al cliente */}
    <div>
      <h3 className="font-semibold mb-2">Atención al cliente</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="#"><strong> Whatsapp</strong></a></li>
        <li><a href="#">&#9990; 3002323060</a></li>
        <li><a href="mailto:pqrs@dislicores.com">✉️ estancojuanos@gmail.com</a></li>
        <li><a href="#">Localizar store</a></li>
        <li><a href="#">Centro de ayuda</a></li>
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