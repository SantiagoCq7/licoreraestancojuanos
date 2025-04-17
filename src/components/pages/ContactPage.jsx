import React from "react";
import { motion } from "framer-motion";
import Footer from "../common/footer";
import ClientAtention from "../../assets/images/AtencionAlCliente.png";
import WhatsApp from "../../assets/images/LogoWhatsApp.png";
import Mail from "../../assets/images/Mail.png";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen p-6 md:p-12 bg-gradient-to-b from-[#d1a601] to-[#b38f00] text-black">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-5xl font-bold text-white drop-shadow-lg mb-3">
            CONTÁCTANOS
          </h2>
          <p className="text-lg md:text-xl font-medium text-white">
            Canales de atención directa
          </p>
        </motion.div>

        {/* Contact Cards - Compact Version */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Horarios */}
          <motion.div
            className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="mb-4">
              <img
                src={ClientAtention}
                alt="Atención al cliente"
                className="w-28 h-28 mx-auto object-contain"
              />
            </div>
            <h3 className="font-bold text-xl mb-4 text-[#d1a601]">Horarios</h3>
            <div className="space-y-2 text-gray-700 text-sm">
              <p>
                <span className="font-medium">L-S:</span> 8am - 1pm
              </p>
              <p>
                <span className="font-medium">Dom/Fest:</span> 8am - 2pm
              </p>
              <p className="mt-4 font-medium">¡Pedidos con anticipación!</p>
              <p className="mt-3">
                310 628 8824
                <br />
                312 456 3275
              </p>
            </div>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="mb-4">
              <img
                src={WhatsApp}
                alt="WhatsApp"
                className="w-28 h-28 mx-auto object-contain"
              />
            </div>
            <h3 className="font-bold text-xl mb-4 text-[#25D366]">WhatsApp</h3>
            <div className="space-y-2 text-gray-700 text-sm">
              <p className="font-medium text-[#25D366]">24/7</p>
              <p>Atención inmediata</p>
              <p className="mt-4">
                310 628 8824
                <br />
                312 456 3275
              </p>
              <button className="mt-4 bg-[#25D366] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#128C7E] transition-colors">
                Enviar mensaje
              </button>
            </div>
          </motion.div>

          {/* Correo */}
          <motion.div
            className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="mb-4">
              <img
                src={Mail}
                alt="Correo electrónico"
                className="w-28 h-28 mx-auto object-contain"
              />
            </div>
            <h3 className="font-bold text-xl mb-4 text-[#d1a601]">Correo</h3>
            <div className="space-y-2 text-gray-700 text-sm">
              <p>Información y reclamos</p>
              <p className="mt-4 font-medium">estancoJuanos@gmail.com</p>
              <p className="mt-4">Respuesta en 24h</p>
              <button className="mt-4 bg-[#d1a601] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#b38f00] transition-colors">
                Enviar email
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Mapa de ubicación */}
        <motion.div
          className="mt-16 max-w-5xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl text-center font-bold text-white mb-6">
            Nuestra ubicación
          </h3>
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-xl border-2 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.03526231968064!2d-75.26983042599562!3d2.9407551646571157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b75446fbfac5f%3A0x37331bfbadde2d0c!2sESTANCO%20JUANO&#39;S!5e0!3m2!1ses-419!2sco!4v1744497750995!5m2!1ses-419!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale-20 hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
          <p className="text-center text-white mt-4 text-base md:text-lg">
            Visítanos en nuestro estanco para una atención personalizada
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
