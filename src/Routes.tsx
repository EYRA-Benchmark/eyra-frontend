import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./pages/Login/Login";

const ReactRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact={true} path="/login" component={Login} />
      </Switch>
    </React.Fragment>
  );
};
export default ReactRouter;
