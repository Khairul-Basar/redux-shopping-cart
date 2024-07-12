import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./features/ui/uiSlice";
import Notificatoin from "./components/Notificatoin";
import { getData, postCartData } from "./features/cart/cartActions";

let isFirstRender = true;
function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.isChanged) {
      dispatch(postCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <div>
      {notification && (
        <Notificatoin type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
