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
    MuiTypography: {
      h5: {
        color: "#1fb8ea",
        margin: "20px 0",
      },
      subtitle1: {
        color: "#1fb8ea",
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
