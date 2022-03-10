import React from "react";
import "./Product.css";

const Product = (props) => {
  return (
    <div className="product">
      <div className="product_info">
        <p>{props.name}</p>
        <p className="product__price">${props.price}</p>
        <p>{"⭐".repeat(parseInt(props.rating))}</p>
      </div>

      <img src={props.image} className="product__image" />
      <button className="product__button">Add to Cart</button>
    </div>
  );
};

export default Product;
