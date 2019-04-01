import * as React from "react";
import { RouteComponentProps, Switch } from 'react-router';
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import paw from "../assets/images/PawLight.png";
import Home from "../pages/Home/Home";
import styles from "./Routes.module.css";

import About from '../pages/About/About';
import Benchmark from '../pages/Benchmark/Benchmark';
import ChallengeDetails from '../pages/Challenges/ChallengeDetails/ChallengeDetails';
import Challenges from '../pages/Challenges/Challenges';
import Login from '../pages/Login/Login';
import NewsDetails from '../pages/News/NewsDetails/NewsDetails';

class Routes extends React.Component<RouteComponentProps<{}>, {}> {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact={true} component={Home} />
        </Switch>
        <div id="root_container">
          <main className={styles.container}>
            <div className={styles.bannerBackground} id="about">
              <img src={paw} />
            </div>
            <Switch>
              <Route exact={true} path="/about" component={About} />
              <Route exact={true} path="/login" component={Login} />
              <Route exact={true} path="/benchmarks" component={Challenges} />
              <Route
                exact={true}
                path="/organize_benchmark"
                component={Benchmark}
              />
              <Route
                exact={true}
                path="/benchmark_details"
                component={ChallengeDetails}
              />
              <Route exact={true} path="/news_details" component={NewsDetails} />
            </Switch>
          </main>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(Routes);
