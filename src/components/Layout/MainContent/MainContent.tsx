import * as React from "react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import Home from "../../../pages/Home/Home";
import ReactRouter from "../../../Routes";

class MainContent extends React.Component<RouteComponentProps<{}>, {}> {
  render() {
    const currentPath = this.props.location.pathname;
    if (currentPath === "/home" || currentPath === "/") {
      return (
        <React.Fragment>
          <Route exact={true} path="/" component={Home} />
          <Route path="/home" component={Home} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <main
            style={{
              margin: " 150px 100px 50px",
              height: "auto"
            }}
          >
            <ReactRouter />
          </main>
        </React.Fragment>
      );
    }
  }
}

export default withRouter(MainContent);
