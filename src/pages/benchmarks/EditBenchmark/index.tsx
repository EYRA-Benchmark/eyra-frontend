import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
// import { Typography } from "@material-ui/core";
import { comicApi } from "../../../services/comicApi";
import styles from "../../Home/Home.module.css";
import { IBenchmark } from "../../../types/benchmark";
import BenchmarkForm from "../../../components/Forms/Benchmark/BenchmarkForm";
import Spinner from "../../../components/Spinner";

interface IState {
  benchmark: IBenchmark | null;
}

class EditBenchmark extends React.Component<
  RouteComponentProps<{ id: string }>,
  IState
> {
  state = {
    benchmark: null,
  };
  async componentDidMount() {
    this.setState({
      benchmark: await comicApi.benchmark(this.props.match.params.id),
    });
  }
  render() {
    const { benchmark } = this.state;
    const content = benchmark ? (
      <BenchmarkForm benchmark={benchmark} />
    ) : (
      <Spinner />
    );
    return (
      <div>
        <h3 className={styles.sectionHeader}>Edit Benchmark</h3>
        {content}
      </div>
    );
  }
}
export default withRouter(EditBenchmark);
