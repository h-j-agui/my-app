import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = () => {
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState(10);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = (quantity) => {
    let total = quantity;
    return total;
  };
  return (
    <div className="quantity-container">
      <div className="plus-minus">
        <button className="restar" onClick={decrement}>
          -
        </button>
        <div className="quant">{quantity}</div>
        <button className="sumar" onClick={increment}>
          +
        </button>
      </div>
      <button className="addToCart" onClick={addToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
