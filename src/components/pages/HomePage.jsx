import React from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import bghomepage from "../../assets/images/bg-homepage.png";


export default function HomePage() {
return (
    <div className="min-h-screen bg-black text-white font-sans">
        {/* Navbar */}
        
        <Navbar />

        {/* Hero Section */}
        <header className="relative flex items-center justify-center h-[calc(100vh-72px)] overflow-hidden">
            <img
                src={bghomepage}
                alt="background"
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
        <Footer />
    </div>
);
}
