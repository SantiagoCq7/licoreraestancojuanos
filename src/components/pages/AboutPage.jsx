import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../common/navbar';
import Footer from '../common/footer';
import EstancoPhoto from '../../assets/images/EstancoPhoto.jpg';
import Repartidor from '../../assets/images/Repartidor.jpg';


const Nosotros = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
        {/* Navbar */}
        <Navbar />
    <section className="bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* ¿QUIÉNES SOMOS? */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12 border-b-2 border-yellow-500 pb-8">
          <motion.img
            src={EstancoPhoto}
            alt="Interior del bar"
            className="rounded-md w-full object-cover"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div>
            <h2 className="text-yellow-500 text-2xl font-bold mb-4">¿QUIÉNES SOMOS?</h2>
            <p className="text-white font-medium">
              En Juano's, no solo vendemos licores, creamos experiencias. Somos el lugar donde cada botella tiene una historia, donde cada trago se disfruta con el mejor ambiente y donde la pasión por los buenos licores se vive a diario. Nuestro estanco es más que un punto de venta, es el sitio donde encuentras lo que necesitas para disfrutar esos momentos especiales.
            </p>
          </div>
        </div>

        {/* NUESTRO MAYOR COMPROMISO */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-yellow-500 text-2xl font-bold mb-4">NUESTRO MAYOR COMPROMISO</h2>
            <p className="text-white font-medium">
              En Juano's, nos aseguramos de que cada entrega sea rápida, segura y llegue en perfectas condiciones. Tanto para pedidos a domicilio como para nuestros clientes mayoristas, utilizamos los mejores métodos de embalaje y transporte para garantizar que cada producto llegue tal como lo esperabas.
            </p>
          </div>
          <motion.img
            src={Repartidor}
            alt="Repartidor en moto"
            className="rounded-md w-full object-cover"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </section>
    {/* Footer */}
     <Footer />
    </div>
  );
};

export default Nosotros;
