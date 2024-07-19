import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

const ProductList = ({ onAddToCart, searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState('grid');

  useEffect(() => {
    const fetchProducts = async () => {
      let url = '/api/products';
      if (searchQuery) {
        url += `/search?query=${searchQuery}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, [searchQuery]);

  return (
    <div>
      <div>
        <button onClick={() => setView('list')}>List View</button>
        <button onClick={() => setView('grid')}>Grid View</button>
      </div>
      <div className={`products ${view}`}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
