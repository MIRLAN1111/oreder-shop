import "./Headers.css"
import React, { useState } from "react";
const OrderBasket = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "cursor", price: 400, quantity: 0 },
    { id: 2, name: "monitor", price: 2000, quantity: 0 },
    { id: 3, name: "macbook", price: 50000, quantity: 0 },
  ]);

  const addToBasket = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const deleteBasket = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(0, product.quantity - 1) }
          : product
      )
    );
  };

  const totalPrice = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div>
      <h1>Shop</h1>
      <ul>
        {products.map((product) => (    
          <div key={product.id}>
            {product.name} - {product.price} SOM - Quantity: {product.quantity}
            <button onClick={() => addToBasket(product.id)}>BUY</button>
            <button onClick={() => deleteBasket(product.id)}>DELETE</button>
          </div>
        ))}
      </ul>
      <h2>KORSINE: {totalPrice} som</h2>
      {totalPrice > 0    ? (
        <p>Your basket is not empty</p>
      ) : (
        <p>Your basket is empty.</p>
      )}
    </div>
  );
};

export default OrderBasket;
