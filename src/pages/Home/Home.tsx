import classNames from "classnames";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

import Prismic from "prismic-javascript";
const RichText = require("prismic-reactjs").RichText;

import bannerImage from "../../assets/images/black_paw.png";

// import FlippingCard from "../../components/FlippingCard/FlippingCard";
import { AxiosResponse } from "axios";
import Spinner from "../../components/Utils/Spinner/Spinner";
import ChallengesGrid from "../Challenges/CardGrid/CardGrid";

import NewsGallary from "../../components/NewsGallary/NewsGallary";
import formatDate from "../../components/Utils/helper";
import axios from "../../services/SetUpAxios";
import { settings } from "../../settings";
import styles from "./Home.module.css";

interface IState {
  news: any;
  challengesData: any;
  selectedItem: any;
  loading: boolean;
}

class Home extends React.Component<RouteComponentProps<{}>, IState> {
  state = {
    news: [],
    challengesData: null,
    selectedItem: null,
    loading: true
  };

  componentWillMount() {
    Prismic.api(settings.prismicEndpoint).then(api => {
      api
        .query(Prismic.Predicates.at("document.type", "news"), {})
        .then((response: any) => {
          if (response) {
            this.setState({ news: response.results });
          }
        });
    });
  }
  shouldComponentUpdate(nextProps: any, nextState: any) {
    return this.state.challengesData !== nextState.challengesData || this.state.news !== nextState.news;
  }
  componentDidMount() {
    axios.get("benchmarks/").then((response: AxiosResponse) => {
      this.setState({
        loading: false,
        challengesData: response.data
      });
    });
  }
  public showDetails = (selectedItem: string) => {
    this.props.history.push({
      pathname: "benchmark_details",
      state: { selectedItem }
    });
  };

  public render() {
    let challengeContent = null;
    
    if (this.state.loading) {
      challengeContent = <Spinner />;
    } else {
      challengeContent = (
        <ChallengesGrid
          size={3}
          data={this.state.challengesData}
          clicked={this.showDetails}
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
        <div className={styles.bg}>
          <div className={styles.content}>
            <div className={styles.section}>
              <h3 className={classNames(styles.sectionHeader)}>Benchmarks</h3>
              {challengeContent}
            </div>
            <div className={styles.section}>
              <h3 className={classNames(styles.sectionHeader)}>News</h3>

              <NewsGallary
                data={this.state.news.map((n: any) => ({
                  uid: n.uid,
                  title: RichText.asText(n.data.title),
                  date: formatDate(new Date(n.first_publication_date)),
                  image: n.data.image.url,
                  contents: RichText.render(n.data.description)
                }))}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
