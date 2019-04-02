import {
  createMuiTheme,
} from "@material-ui/core";

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiSvgIcon: {
      root: {
        color: "#000",
      },
    },
    MuiButton: {
      textPrimary: {
        color: "#1fb8ea",
        textTransform: "none",
        float: "right",
      },
    },
    MuiModal: {
      root: {},
    },
  },
  palette: {
    primary: {
      main: "#1fb8ea",
    },
    secondary: {
      main: "#fff",
    },
  },
});
