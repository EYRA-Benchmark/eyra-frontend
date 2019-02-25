import * as React from "react";
import { Route, Switch } from "react-router-dom";
import ChallengeDetails from "./pages/Challenges/ChallengeDetails/ChallengeDetails";
import Challenges from "./pages/Challenges/Challenges";
import Login from "./pages/Login/Login";
import NewsDetails from "./pages/News/NewsDetails/NewsDetails";
const ReactRouter = () => {
  return (
    <Switch>
      <Route>
        <div id="root_container">
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/challenges" component={Challenges} />
          <Route
            exact={true}
            path="/challenge_details"
            component={ChallengeDetails}
          />
          <Route exact={true} path="/news_details" component={NewsDetails} />
        </div>
      </Route>
    </Switch>
  );
};
export default ReactRouter;
