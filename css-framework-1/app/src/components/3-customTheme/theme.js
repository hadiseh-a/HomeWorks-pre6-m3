import { createTheme } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: red[600],
    },
    success: {
      main: green[400],
    },
  },
});

export default theme;
