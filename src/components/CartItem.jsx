import React from "react";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../features/cart/cartSlice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions">-</button>
      <button className="cart-actions" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default CartItem;
