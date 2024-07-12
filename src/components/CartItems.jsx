import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const { totalItemsQuantity, isShowCart, itemLists } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {itemLists.length > 0 ? (
          itemLists.map((item) => (
            <li key={item.id}>
              <CartItem
                id={item.id}
                price={item.price}
                name={item.name}
                total={item.totalPrice}
                quantity={item.quantity}
              />
            </li>
          ))
        ) : (
          <li>No Product added on Cart</li>
        )}
      </ul>
    </div>
  );
};

export default CartItems;
