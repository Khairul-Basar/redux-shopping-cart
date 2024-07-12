import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
const Layout = () => {
  const { isShowCart, itemLists } = useSelector((state) => state.cart);
  let total = itemLists.reduce((sum, item) => sum + item.totalPrice, 0);
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
        {isShowCart && <CartItems />}
      </div>
    </React.Fragment>
  );
};

export default Layout;
