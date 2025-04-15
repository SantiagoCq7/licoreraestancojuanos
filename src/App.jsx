import React from 'react';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import ContactPage from './components/pages/ContactPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
