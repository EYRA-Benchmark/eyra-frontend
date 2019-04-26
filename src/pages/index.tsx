import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { comicApi } from "../services/comicApi";
import { IBenchmark } from "src/types";

import styles from "./Home.module.css";

import { INews, IPrismicResult } from "../types/prismic";

interface IState {
  news: Array<IPrismicResult<INews>>;
  challengesData: IBenchmark[] | null;
  selectedItem: any;
  loading: boolean;
}

class Home extends React.Component<RouteComponentProps<{}>, IState> {
  state = {
    news: [],
    challengesData: null,
    selectedItem: null,
    loading: true,
  };

  public edit = (selectedItemId: string) => {
    this.props.history.push({
      pathname: `edit_benchmark/${selectedItemId}`,
      state: { selectedItemId },
    });
  }

  componentWillMount() {
   console.log(styles);
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return (
      this.state.challengesData !== nextState.challengesData ||
      this.state.news !== nextState.news
    );
  }
  async componentDidMount() {
    this.setState({
      loading: false,
      challengesData: await comicApi.benchmarks(),
    });
  }

  scrollToNext() {
    const benchmarkSection = document.getElementById("benchmarks");
    if (benchmarkSection) {
      benchmarkSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  public render() {
    return (
      <div className={styles.section}>APPP</div>
    );
  }
}

export default Home;
