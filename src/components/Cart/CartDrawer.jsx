// src/components/cart/CartDrawer.jsx
import React from 'react';
import { X, Trash2, Minus, Plus } from 'lucide-react';

function CartDrawer({ isOpen, onClose, items, removeItem, updateQuantity }) {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-black text-white z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex items-center justify-between p-4 border-b border-white/20">
        <h2 className="text-lg font-semibold">carrito de compras</h2>
        <button onClick={onClose}><X /></button>
      </div>

      <div className="overflow-y-auto flex-1 p-4 space-y-4 max-h-[70%]">
        {items.length === 0 ? (
          <p className="text-center text-white/60">Tu carrito está vacío.</p>
        ) : items.map(item => (
          <div key={item.id} className="flex items-center gap-4 border-b pb-2 border-white/20">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-yellow-400 font-bold">${item.price.toLocaleString()}</p>
              <div className="flex items-center mt-1 gap-2">
                <button onClick={() => updateQuantity(item.id, -1)}><Minus size={16} /></button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}><Plus size={16} /></button>
              </div>
            </div>
            <button onClick={() => removeItem(item.id)}><Trash2 className="text-red-400" /></button>
          </div>
        ))}
      </div>

      <div className="bg-yellow-400 text-black p-4 mt-auto">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between mb-2 text-sm">
          <span>Costos de envío</span>
          <span>$0</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${subtotal.toLocaleString()}</span>
        </div>
        <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">Realizar pedido</button>
      </div>
    </div>
  );
}

export default CartDrawer;
