import React from "react";

export default function HomePage() {
return (
    <div className="min-h-screen bg-black text-white font-sans">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4">
            <div className="flex items-center space-x-4">
                <img
                    src="public/images/logo-nav.png" 
                    alt="Logo"
                    className="h-20 w-50 object-contain" 
                />
            </div>
            <div className="flex items-center space-x-6 font-bold">
                <a href="#productos" className="hover:text-yellow-400">PRODUCTOS</a>
                <a href="#nosotros" className="hover:text-yellow-400">NOSOTROS</a>
                <a href="#servicios" className="hover:text-yellow-400">SERVICIOS</a>
                <a href="#contacto" className="border-2 text-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">CONTÁCTANOS</a>
                <button className="bg-white text-2xl px-2 py-2 rounded-full hover:bg-yellow-400 transition">🛒</button>
            </div>
        </nav>

        {/* Hero Section */}
        <header className="relative flex items-center justify-center h-[calc(100vh-72px)] overflow-hidden">
            <img
                src="public/images/bg-homepage.png"
                alt="cheers"
                className="absolute w-full h-full object-cover opacity-35"
            />
            <div className="relative z-10 text-center px-4">
                <h1 className="text-6xl md:text-8xl font-extrabold leading-tight hover:text-yellow-400 transition">
                    <span className="text-yellow-400">¡Bienvenidos!</span> <br /> 
                    ESTANCO <br /> JUANO’S
                </h1>
                <button className="mt-20 px-6 py-3 border-2 border-white text-2xl text-white font-bold rounded-full hover:bg-white hover:text-black transition">
                    Haz tu pedido
                </button>
            </div>
        </header>

        {/*footer*/}
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
    </div>



);
}
