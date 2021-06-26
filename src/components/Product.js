import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="products">
      <img className="small" src={product.image} alt={product.name} />
      <h6>{product.name}</h6>
      <button onClick={() => onAdd(product)}>Add To Cart</button>
    </div>
  );
}
