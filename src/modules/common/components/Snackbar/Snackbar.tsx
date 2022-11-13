import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import { useDispatch, useSelector } from "react-redux";
import { hideSnackbar } from "@/store/ducks/snackbar";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const dispatch = useDispatch();
  const snackbar = useSelector((state: any) => state.snackBar);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(hideSnackbar());
  };

  return (
    <Snackbar
      open={snackbar.snackbarOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity={snackbar.snackbarType}
        sx={{ width: "100%" }}
      >
        {snackbar.snackbarMessage}
      </Alert>
    </Snackbar>
  );
}
