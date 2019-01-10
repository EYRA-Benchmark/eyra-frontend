import classNames from "classnames";
import * as React from "react";

import Prismic from "prismic-javascript";

const RichText = require("prismic-reactjs").RichText;

import FlippingCard from "../../components/FlippingCard/FlippingCard";
import Gallary from "../../components/Gallary/Gallary";
import settings from "../../settings";
import styles from "./Home.module.css";

class Home extends React.Component<{}, {}> {
  state = {
    news: []
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

  public render() {
    return (
      <React.Fragment>
        <div className={styles.container}>
          <div className={`${styles.image} ${styles.banner_image}`}>
            <div className={classNames(styles.caption)}>
              <div className={styles.article}>
                <span>E</span>nlighten&nbsp;
                <span>Y</span>our&nbsp;
                <span>R</span>search
              </div>
              <p>
                Eyra are persistent and possess leadership abilities. Eyra dream
                big and so are their achievements in real world. Eyra can
                transform any idea into reality which make them a master builder
                equipped with ingenuity and innovation.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.innerContainer}>
          <div className={styles.content}>
            <h3 className={classNames(styles.sectionHeader, styles.divider)}>
              About Us
            </h3>
            <FlippingCard />
          </div>

          <div className={styles.content}>
            <h3 className={classNames(styles.sectionHeader, styles.divider)}>
              News
            </h3>

            <Gallary
              data={this.state.news.map((n: any) => ({
                title:
                  new Date(n.first_publication_date)
                    .toISOString()
                    .split("T")[0] +
                  ": " +
                  RichText.asText(n.data.title),
                image: n.data.image.url,
                contents: RichText.render(n.data.description)
              }))}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
