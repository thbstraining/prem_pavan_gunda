import React from 'react';
import { getCart, removeFromCart } from '../Utils/localstorage';

const Cart = () => {
  const cart = getCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    alert('Item removed from cart!');
    window.location.reload(); 
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <img className="w-24 h-24 object-cover rounded-md" src={item.image} alt={item.title} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md mr-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-end">
            <div className="bg-blue shadow-md rounded-lg p-4 text-xl text-#023047 font-semibold">
              Total: ${getTotalPrice()}
            </div>
          </div>

          
        </>
      )}
    </div>
  );
};

export default Cart;
