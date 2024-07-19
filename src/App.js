import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="app">
        <header>
          <h1>E-commerce Store</h1>
          <SearchBar onSearch={handleSearch} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ProductList onAddToCart={handleAddToCart} searchQuery={searchQuery} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} onRemove={handleRemoveFromCart} />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
