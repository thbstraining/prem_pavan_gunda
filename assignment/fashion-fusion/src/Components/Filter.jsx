import React from 'react';

const Filter = ({ handleFilterChange }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    handleFilterChange(value);
  };

  return (
    <div className="filter">
      <label htmlFor="price-filter" className="text-white">Filter by Price:</label>
      <select id="price-filter" onChange={handleChange} className="ml-2 px-3 py-3 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="all">All</option>
        <option value="0-50">$0 - $50</option>
        <option value="51-100">$51 - $100</option>
        <option value="101-200">$101 - $200</option>
      </select>
    </div>
  );
};

export default Filter;
