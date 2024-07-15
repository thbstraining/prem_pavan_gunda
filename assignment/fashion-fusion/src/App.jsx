import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './Pages/Home';
import ViewCart from './Pages/ViewCart';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>  
          <Route exact path="/" element={<Home />} />
          <Route exact path="/view-cart" element={<ViewCart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
