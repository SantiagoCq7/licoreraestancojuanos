import React from "react";
import { motion } from 'framer-motion';
import Footer from "../common/footer";
import bghomepage from "../../assets/images/bg-homepage.png";

export default function HomePage() { // 👈 recibimos la prop
  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* Hero Section */}
      <header className="relative flex items-center justify-center h-[calc(100vh-72px)] overflow-hidden">
        <img
          src={bghomepage}
          alt="background"
          className="absolute w-full h-full object-cover opacity-35"
        />
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight hover:text-yellow-400 transition">
            ESTANCO <br /> JUANO’S
          </h1>
          <button className="mt-20 px-6 py-3 border-2 border-white text-2xl text-white font-bold rounded-full hover:text-yellow-400 hover:border-yellow-400 hover:scale-110 transition">
            Haz tu pedido
          </button>
        </motion.div>
      </header>
      {/* Footer */}
      <Footer />
    </div>
  );
}
