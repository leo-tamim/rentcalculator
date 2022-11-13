import { AlertColor } from "@mui/material";

export const SHOW_SNACKBAR = "teamly/settings/SHOW_SNACKBAR";
export const HIDE_SNACKBAR = "teamly/settings/HIDE_SNACKBAR";

export interface CommonState {
  snackbarOpen: boolean;
  snackbarType: AlertColor;
  snackbarMessage: string;
}

const initialState: CommonState = {
  snackbarOpen: false,
  snackbarType: "success",
  snackbarMessage: "",
};

const SnackBar = (state: CommonState = initialState, action: any) => {
  switch (action.type) {
    case SHOW_SNACKBAR:
      return {
        ...state,
        snackbarOpen: true,
        snackbarType: action.snackbarType,
        snackbarMessage: action.snackbarMessage,
      };

    case HIDE_SNACKBAR:
      return {
        ...state,
        snackbarOpen: false,
      };
    default:
      return state;
  }
};

export default SnackBar;

export const showSnackbar = ({
  type,
  message,
}: {
  type: AlertColor;
  message: string;
}) => ({
  type: SHOW_SNACKBAR,
  snackbarType: type,
  snackbarMessage: message,
});

export const hideSnackbar = () => ({
  type: HIDE_SNACKBAR,
});
