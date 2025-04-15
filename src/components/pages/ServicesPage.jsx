import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import TragosFavoritos from '../../assets/images/ComprayDisfruta.webp';
import AtencionEstanco from '../../assets/images/AtencionEstanco.jpg';


const Servicios = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
        {/* Navbar */}
        <Navbar />
    <section className="bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Atencion al cliente */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12 border-b-2 border-yellow-500 pb-8">
        <div>
            <h2 className="text-yellow-500 text-2xl font-bold mb-4">¿QUIÉNES SOMOS?</h2>
            <p className="text-white font-medium">
            Te ofrecemos atención personalizada en nuestro local, donde nuestro equipo está disponible para ayudarte con tus consultas, recomendaciones o cualquier necesidad relacionada con nuestros productos.
            </p>
          </div>

          <motion.img
            src={AtencionEstanco}
            alt="Tragos favoritos"
            className="rounded-md ml-10 w-96 h-96 object-cover"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* NUESTRO MAYOR COMPROMISO */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.img
            src={TragosFavoritos}
            alt="Repartidor en moto"
            className="rounded-md w-96 h-96 object-cover"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <div>
            <h2 className="text-yellow-500 text-2xl font-bold mb-4">NUESTRO MAYOR COMPROMISO</h2>
            <p className="text-white font-medium">
            Disfruta de tus licores favoritos sin salir de casa. Realiza tu pedido en línea y te lo llevamos directamente a tu puerta, de manera rápida y segura. También ofrecemos distribución a negocios, asegurando que tus necesidades de inventario estén siempre cubiertas.
            </p>
          </div>

        </div>
      </div>
    </section>
    {/* Footer */}
     <Footer />
    </div>
  );
};

export default Servicios;
