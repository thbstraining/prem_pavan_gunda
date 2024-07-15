import React from 'react';
import Cart from '../Components/Cart';

const ViewCart = () => {
  return (
    <div className="view-cart bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8 text-center">Your Cart</h1>
        <Cart />
      </div>
    </div>
  );
};

export default ViewCart;
