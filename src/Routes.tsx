import * as React from "react";
import { Route, Switch } from "react-router-dom";
import ChallengeDetails from "./pages/Challenges/ChallengeDetails/ChallengeDetails";
import Challenges from "./pages/Challenges/Challenges";
import Login from "./pages/Login/Login";
const ReactRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/challenges" component={Challenges} />
        <Route
          exact={true}
          path="/challenge_details"
          component={ChallengeDetails}
        />
      </Switch>
    </React.Fragment>
  );
};
export default ReactRouter;
