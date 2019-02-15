import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Theme from "../src/Theme/Theme";
import Layout from "./Layout/Layout";
class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}

export default Theme(App);
