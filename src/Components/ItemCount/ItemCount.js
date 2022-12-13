import React, { useState } from "react";
import "./ItemCount.css";
import { Button } from "@chakra-ui/react";

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

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     axios
  //       .post("", {
  //         quantity,
  //       })
  //       .then((res) => {
  //         setQuantity;
  //       });
  //   };
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
      <Button
        fontSize="14px"
        border="2px"
        borderColor="#ccd0d5"
        size="md"
        className="addToCart"
        type="submit"
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
