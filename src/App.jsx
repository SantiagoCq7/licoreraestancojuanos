import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Paginas
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ProductsPage from './components/products/ProductList';
import ServicesPage from './components/pages/ServicesPage';
import ContactPage from './components/pages/ContactPage';

// UI
import CartDrawer from './components/Cart/CartDrawer';
import Header from './components/layout/Header';

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/product", element: <ProductsPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/contact", element: <ContactPage /> }
];

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Guardar carrito en localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <BrowserRouter>
      <div className="relative">
        <Header onCartClick={() => setIsCartOpen(true)} />
        
        <Routes>
          {routes.map(({ path, element }, i) => (
            <Route
              key={i}
              path={path}
              element={React.cloneElement(element, { addToCart })}
            />
          ))}
        </Routes>

        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          removeItem={removeFromCart}
          updateQuantity={updateQuantity}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
