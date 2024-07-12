import { uiActions } from "../ui/uiSlice";
import { cartActions } from "./cartSlice";

export const getData = () => {
  return async (dispatch) => {
    const getDataHandler = async () => {
      const res = await fetch(
        "https://redux-shopping-cart-f50a1-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = await res.json();
      return data;
    };
    try {
      const cartData = await getDataHandler();
      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      // sending state as Error
      dispatch(
        uiActions.showNotification({
          message: "Sending Request Failed!!",
          type: "error",
          open: true,
        })
      );
    }
  };
};

export const postCartData = (cart) => {
  return async (dispatch) => {
    // sending State as request
    dispatch(
      uiActions.showNotification({
        message: "Sending Request",
        type: "warning",
        open: true,
      })
    );
    const sendRequestHandler = async () => {
      const res = await fetch(
        "https://redux-shopping-cart-f50a1-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      // Sending state as Request Success
      dispatch(
        uiActions.showNotification({
          message: "Sending Data Request successfully",
          type: "success",
          open: true,
        })
      );
    };
    try {
      await sendRequestHandler();
    } catch (err) {
      // sending state as Error
      dispatch(
        uiActions.showNotification({
          message: "Sending  Failed!!",
          type: "error",
          open: true,
        })
      );
    }
  };
};
