import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase';


const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [quantityMap, setQuantityMap] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const items = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(items);
    };

    fetchProducts();
  }, []);

  const handleQuantityChange = (id, delta) => {
    setQuantityMap(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  const handleAdd = (product) => {
    const quantity = quantityMap[product.id] || 1;
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantityMap(prev => ({ ...prev, [product.id]: 1 }));
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || product.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-black min-h-screen text-white px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">Nuestros Productos</h2>

      {/* Buscador y filtros */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <input
          type="text"
          placeholder="Buscar producto..."
          className="px-4 py-2 rounded-md w-full md:w-1/2 text-black"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          className="px-4 py-2 rounded-md text-black"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          <option value="all">Todos</option>
          <option value="cerveza">Cervezas</option>
          <option value="accesorio">Accesorios</option>
          <option value="otro">Otros</option>
        </select>
      </div>

      {/* Grid de productos */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-white/60 col-span-full">No se encontraron productos.</p>
        ) : (
          filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white/10 rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-60 w-full object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-yellow-400 font-bold text-lg mb-4">${product.price.toLocaleString()}</p>

                  {/* Selector de cantidad */}
                  <div className="flex items-center gap-2 mb-4">
                    <button
                      onClick={() => handleQuantityChange(product.id, -1)}
                      className="px-3 py-1 bg-white text-black rounded hover:bg-yellow-300"
                    >-</button>
                    <span>{quantityMap[product.id] || 1}</span>
                    <button
                      onClick={() => handleQuantityChange(product.id, 1)}
                      className="px-3 py-1 bg-white text-black rounded hover:bg-yellow-300"
                    >+</button>
                  </div>
                </div>

                <button
                  onClick={() => handleAdd(product)}
                  className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
