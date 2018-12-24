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
        color: "#62dafb"
      }
    },
    MuiModal: {
      root: {
      }
    }
  },
  palette: {
    primary: {
      main: "#77b7eb"
    }
  },

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
