import React from "react";

import "./Product.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../features/cart/cartSlice";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
