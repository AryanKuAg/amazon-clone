import React from "react";
import "./Product.css";

const Product = (props) => {
  return (
    <div className="product">
      <p>{props.name}</p>
      <p className="product__price">${props.price}</p>
      <p>{"⭐".repeat(parseInt(props.rating))}</p>
      <img src={props.image} className="product__image" />
      <button className="product__button">Add to Cart</button>
    </div>
  );
};

export default Product;
