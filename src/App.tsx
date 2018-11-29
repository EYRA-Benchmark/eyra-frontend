import * as React from "react";
import Theme from "../src/Theme/Theme";
import LandingPage from "./components/Layout/LandingPage/LandingPage";
class App extends React.Component {
  render() {
    return <LandingPage />;
  }
}

export default Theme(App);
