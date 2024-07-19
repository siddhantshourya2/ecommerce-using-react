import React, { useState } from 'react';

const Checkout = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleCheckout = () => {
    // Handle checkout process
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleCheckout}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
          placeholder="Address"
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
