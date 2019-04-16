import classNames from "classnames";
import Prismic from "prismic-javascript";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { KeyboardArrowDown as DownIcon } from "@material-ui/icons/";
import { prismicApi } from "src/services/prismicApi";
import { comicApi } from "src/services/comicApi";
import { Fab } from "@material-ui/core";
import { IBenchmark } from "src/types";

import Spinner from "src/components/Spinner/index";
import ChallengesGrid from "src/components/BenchmarkCardGrid/index";
import NewsGallery from "src/components/NewsGallery";
const RichText = require("prismic-reactjs").RichText;

import { formatDate } from "src/utils";

import bannerImage from "src/assets/images/black_paw.png";
import styles from "./Home.module.css";

interface IState {
  news: any;
  challengesData: IBenchmark[] | null;
  selectedItem: any;
  loading: boolean;
}

class Index extends React.Component<RouteComponentProps<{}>, IState> {
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
    prismicApi
      .query(Prismic.Predicates.at("document.type", "news"), {})
      .then((response: any) => {
        if (response) {
          this.setState({ news: response.results });
        }
      });
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
    let challengeContent = null;

    if (this.state.loading) {
      challengeContent = <Spinner />;
    } else {
      challengeContent = (
        <ChallengesGrid
          size={3}
          benchmarks={this.state.challengesData!}
          // edit={this.edit}
        />
      );
    }

    return (
      <React.Fragment>
        <div className={styles.container}>
          <div className={styles.bannerBackground} id="demo">
            <span />
            <span />
            <span />
          </div>
          <div className={styles.caption}>
            <div className={styles.article}>
              <h3>EYRA Benchmark Platform</h3>
            </div>
            <p>A platform for benchmarking scientific algorithms</p>
          </div>
          <div className={styles.bannerImage}>
            <img src={bannerImage} alt="logo" />
          </div>
        </div>

        <div className={styles.downBtn}>
          <Fab color="primary" aria-label="Down" onClick={this.scrollToNext} title="Scroll Down">
            <DownIcon />
          </Fab>
        </div>

        <div className={styles.bg}>
          <div className={styles.content}>
            <div className={styles.section} id="benchmarks">
              <div className={styles.titleContainer}>
                <h3 className={classNames(styles.sectionHeader)}>Benchmarks</h3>
                {/* <a href="/organize_benchmark">Organize Benchmark</a> */}
              </div>
              {challengeContent}
            </div>
            <div className={styles.section}>
              <h3 className={classNames(styles.sectionHeader)}>News</h3>

              <NewsGallery
                data={this.state.news.map((n: any) => ({
                  uid: n.uid,
                  title: RichText.asText(n.data.title),
                  date: formatDate(new Date(n.first_publication_date)),
                  image: n.data.image.url,
                  contents: RichText.render(n.data.description),
                }))}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
