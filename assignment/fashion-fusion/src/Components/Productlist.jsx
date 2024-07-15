import React from 'react';
import { addToCart } from '../Utils/localstorage';
import 'tailwindcss/tailwind.css';

const ProductList = ({ products }) => {
  const handleAddToCart = (product) => {
    const addedToCart = addToCart(product);
    if (addedToCart) {
      alert(`${product.title} added to cart!`);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
          <img className="w-full h-72 md:h-96 object-cover object-center" src={product.image} alt={product.title} />
          <div className="p-4">
            <h3 className="text-gray-900 font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-700">${product.price.toFixed(2)}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
