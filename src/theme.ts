import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  overrides: {
    // MuiSvgIcon: {
    //   root: {
    //     color: "#000",
    //   },
    // },
    MuiButton: {
      textPrimary: {
        textTransform: "none",
        float: "right",
      },
    },
    MuiFab: {
      label: {
        textTransform: "none",
      },
    },
    MuiTab: {
      label: {
        textTransform: "none",
      },
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
