import * as React from "react";
import { Route } from "react-router-dom";

import About from "./pages/About/About";
import BenchmarkDetails from "src/pages/BenchmarkDetails/index";
import Benchmarks from "./pages/Benchmarks/index";
import Login from "./pages/Login/Login";
import NewsDetails from "./pages/NewsDetails/index";

export default () => (
  <React.Fragment>
    <Route exact={true} path="/about" component={About} />
    <Route exact={true} path="/login" component={Login} />
    <Route exact={true} path="/benchmarks" component={Benchmarks} />
    <Route path="/benchmark/:id" component={BenchmarkDetails} />
    <Route path="/news/:id" component={NewsDetails} />
  </React.Fragment>
);
