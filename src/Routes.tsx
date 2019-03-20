import * as React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import OrganizeBenchmark from "./pages/Benchmark/Benchmark";
import ChallengeDetails from "./pages/Challenges/ChallengeDetails/ChallengeDetails";
import Challenges from "./pages/Challenges/Challenges";
import Login from "./pages/Login/Login";
import NewsDetails from "./pages/News/NewsDetails/NewsDetails";
const ReactRouter = () => {
  return (
    <Switch>
      <Route>
        <div id="root_container">
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/login" component={Login} />
          <Route exact={true} path="/benchmarks" component={Challenges} />
          <Route
            exact={true}
            path="/organize_benchmark"
            component={OrganizeBenchmark}
          />
          <Route
            exact={true}
            path="/benchmark_details"
            component={ChallengeDetails}
          />
          <Route exact={true} path="/news_details" component={NewsDetails} />
        </div>
      </Route>
    </Switch>
  );
};
export default ReactRouter;
