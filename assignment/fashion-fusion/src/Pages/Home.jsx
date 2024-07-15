import React, { useState, useEffect } from 'react';
import ProductList from '../Components/Productlist'; 
import Filter from '../Components/Filter';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../Services/ProductService'; 
import 'tailwindcss/tailwind.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState('all');
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data); 
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (value) => {
    setPriceFilter(value);
    filterProducts(value);
  };

  const filterProducts = (filter) => {
    switch (filter) {
      case '0-50':
        setFilteredProducts(products.filter((product) => product.price >= 0 && product.price <= 50));
        break;
      case '51-100':
        setFilteredProducts(products.filter((product) => product.price >= 51 && product.price <= 100));
        break;
      case '101-200':
        setFilteredProducts(products.filter((product) => product.price >= 101 && product.price <= 200));
        break;
      case 'all':
        setFilteredProducts(products);
        break;
      default:
        setFilteredProducts(products); 
        break;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-[#023047] py-4  px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link to="/view-cart" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-4 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                View Cart
              </Link>
            </div>

            <div className="flex-1 flex justify-center">
              <h1 className="text-3xl text-white font-semibold">Welcome to Fashion Fusion!</h1>
            </div>

            <div className="mt-4 flex-shrink-0">
              <Filter handleFilterChange={handleFilterChange} />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-8 lg:px-8">
        {loading ? (
          <div className="text-center py-10">
            <p className="text-gray-600">Loading products...</p>
          </div>
        ) : (
          <ProductList products={priceFilter === 'all' ? products : filteredProducts} />
        )}
      </div>
    </div>
  );
};

export default Home;
