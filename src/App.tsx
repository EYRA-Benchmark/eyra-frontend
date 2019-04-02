import * as React from "react";
import RootLayout from "./components/RootLayout";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import theme from "./theme";

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <RootLayout />
      </MuiThemeProvider>
    );
  }
}

export default App;
