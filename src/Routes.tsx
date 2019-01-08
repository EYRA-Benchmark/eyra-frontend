import * as React from "react";
import { Route, Switch } from "react-router-dom";
import ChallengeDetails from "./pages/Challenges/ChallengeDetails/ChallengeDetails";
import Challenges from "./pages/Challenges/Challenges";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
const ReactRouter = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/login" component={Login} />
      <Route exact={true} path="/challenges" component={Challenges} />
      <Route
        exact={true}
        path="/challenge_details"
        component={ChallengeDetails}
      />
    </Switch>
  );
};
export default ReactRouter;
