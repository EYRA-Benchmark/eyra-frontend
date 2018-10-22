import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

const ReactRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/home" component={Home} />
        <Route exact={true} path="/login" component={Login} />
      </Switch>
    </React.Fragment>
  );
};
export default ReactRouter;
