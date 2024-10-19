import { createTheme } from "@mui/material";

// Define your primary color
const primaryColor = "#5b41ff";
const secondaryColor = "#3f4f58";

// Create a MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    text: {
      secondary: "#aaaaaa",
    },
    info: {
      main: "#fff",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 400,
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: "28px",
      fontWeight: "600",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "600",
    },
    h3: {
      fontSize: "20px",
      fontWeight: "600",
    },
    h4: {
      fontSize: "18px",
      fontWeight: "600",
    },
    h5: {
      fontSize: "16px",
      fontWeight: "600",
    },
    body1: {
      fontSize: "16px",
      fontWeight: "300",
    },
    body2: {
      fontSize: "14px",
      fontWeight: "300",
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: "500",
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: "300",
    },
    button: {
      textTransform: "none",
    },
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});

export default theme;
