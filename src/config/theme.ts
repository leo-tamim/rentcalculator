import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#204099",
    },
    secondary: {
      main: "#1B89A6",
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: "#ffa726",
    },
  },
});

export default theme;
