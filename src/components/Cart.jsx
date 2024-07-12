import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../features/cart/cartSlice";
const Cart = () => {
  const { totalItemsQuantity, isShowCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const showCartHandler = () => {
    dispatch(cartActions.showCart());
  };
  return (
    <div className="cartIcon">
      <h3 onClick={showCartHandler}>Cart: {totalItemsQuantity} Items</h3>
    </div>
  );
};

export default Cart;
