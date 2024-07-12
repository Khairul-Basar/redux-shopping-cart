import { Alert } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../features/ui/uiSlice";

function Notificatoin({ type, message }) {
  const dispatch = useDispatch();
  const notify = useSelector((state) => state.ui.notification);
  const closeHandler = () => {
    dispatch(
      uiActions.showNotification({
        open: false,
      })
    );
  };
  return (
    <div>
      {notify.open && (
        <Alert severity={type} onClose={closeHandler}>
          {message}
        </Alert>
      )}
    </div>
  );
}

export default Notificatoin;
