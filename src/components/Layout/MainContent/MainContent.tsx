import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../../pages/Home/Home";
import ReactRouter from "../../../Routes";

function MainContent() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/home" component={Home} />
      </Switch>
      <main
        style={{
          margin: " 150px 100px 0",
          background: "aliceblue",
          height: "auto"
        }}
      >
        <ReactRouter />
      </main>
    </React.Fragment>
  );
}

export default MainContent;
