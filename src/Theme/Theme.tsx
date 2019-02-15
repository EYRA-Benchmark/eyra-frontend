import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider
} from "@material-ui/core";
import * as React from "react";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiSvgIcon: {
      root: {
        color: "#000"
      }
    },
    MuiButton: {
      textPrimary: {
        color: "#1fb8ea",
        textTransform: "none",
        float: "right"
      }
    },
    MuiModal: {
      root: {}
    }
  },
  palette: {
    primary: {
      main: "#1fb8ea"
    },
    secondary: {
      main: "#fff"
    }
  }
});

function withRoot(Component: React.ComponentType) {
  function WithRoot(props: object) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
