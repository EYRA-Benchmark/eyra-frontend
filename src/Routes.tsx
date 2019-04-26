import * as React from "react";
import { Route } from "react-router-dom";

import About from "./pages/About";
import BenchmarkDetails from "src/./pages/BenchmarkDetails";
import Benchmarks from "./pages/Benchmarks";
import Login from "./pages/Login";
import NewsDetails from "./pages/NewsDetails";
import EditBenchmark from "src/./pages/Benchmarks/EditBenchmark/";
import Datasets from "src/./pages/Datasets/";
import DatasetDetails from "src/./pages/DatasetDetails/";
import EditDataset from "./pages/Datasets/EditDataset/EditDataset";
export default () => (
  <React.Fragment>
    <Route exact={true} path="/about" component={About} />
    <Route exact={true} path="/login" component={Login} />
    <Route exact={true} path="/benchmarks" component={Benchmarks} />
    <Route exact={true} path="/datasets" component={Datasets} />
    <Route path="/benchmark/:id" component={BenchmarkDetails} />
    <Route path="/dataset/:id" component={DatasetDetails} />
    <Route path="/edit_benchmark/:id" component={EditBenchmark} />
    <Route path="/edit_dataset/:id" component={EditDataset} />
    <Route path="/news/:id" component={NewsDetails} />
  </React.Fragment>
);
