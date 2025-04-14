import React from "react";
import Footer from "../common/footer";
import Navbar from "../common/navbar";
import ClientAtention from "../../assets/images/AtencionAlCliente.png";
import WhatsApp from "../../assets/images/LogoWhatsApp.png";
import Mail from "../../assets/images/Mail.png";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen p-10 bg-[#d1a601] text-black">
      <div className="text-center">
          <h2 className="text-6xl font-bold text-white drop-shadow-md mb-2">
            CONTÁCTO
          </h2>
          <p className="text-xl text-center font-semibold mt-6">Canáles de atención</p>
        </div>
        <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 px-10 md:px-20">
          {/* Horarios */}
          <div className="bg-white rounded-2xl min-h-96 p-8 text-center shadow-md">
            <div>
              <img src={ClientAtention} alt="AtencionCliente"/>
            </div>
            <h3 className="font-bold text-lg m-8">Horarios de atención</h3>
            <p className="m-6 text-sm">
              De lunes a sábado de 8 am a 1 pm <br /> Domingos y festivos de 8
              am a 2 pm
            </p>
            <p className="mt-6 font-semibold">¡Haz tu pedido con tiempo!</p>
            <p className="mt-6 text-sm">3106288824 - 3124563275</p>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div>
              <img src={WhatsApp} alt="WhatsappLogo" />
            </div>
            <h3 className="font-bold text-lg m-10">Línea WhatsApp</h3>
            <p className="text-lg font-bold text-green-700">¡24h!</p>
            <p className="m-6 text-sm">3106288824 - 3124563275</p>
            <p className="mt-6 font-semibold ">¡Haz tu pedido con tiempo!</p>
          </div>

          {/* Correo */}
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div>
              <img src={Mail} alt="" />
            </div>
            <h3 className="font-bold text-lg m-10">Correo</h3>
            <p className="mt-6 text-sm">estancoJuanos@gmail.com</p>
            <p className="mt-6 font-semibold">Información y reclamos</p>
          </div>
        </div>

              {/* Mapa de ubicación */}
      <div className="mt-12 px-6 md:px-16">
        <h3 className="text-2xl text-center font-bold text-white mb-4">¿Dónde estamos?</h3>
        <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.03526231968064!2d-75.26983042599562!3d2.9407551646571157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b75446fbfac5f%3A0x37331bfbadde2d0c!2sESTANCO%20JUANO&#39;S!5e0!3m2!1ses-419!2sco!4v1744497750995!5m2!1ses-419!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      
      </section>



      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
