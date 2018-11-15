import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Challenges from "./pages/Challenges/Challenges";
import Login from "./pages/Login/Login";
const ReactRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/challenges" component={Challenges} />
      </Switch>
    </React.Fragment>
  );
};
export default ReactRouter;
