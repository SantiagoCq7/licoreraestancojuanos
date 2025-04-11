import React from "react";

export default function HomePage() {
return (
    <div className="min-h-screen bg-black text-white font-sans">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-700">
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
                <a href="#contacto" className="bg-white text-black rounded-full px-4 py-1 hover:bg-yellow-400 transition">CONTÁCTANOS</a>
                <button className="bg-white text-2xl px-2 py-2 rounded-full hover:bg-yellow-400 transition">🛒</button>
            </div>
        </nav>

        {/* Hero Section */}
        <header className="relative flex items-center justify-center h-[calc(100vh-72px)] overflow-hidden">
            <img
                src="public/images/bg-homepage.png"
                alt="cheers"
                className="absolute w-full h-full object-cover opacity-70"
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
    </div>
);
}
