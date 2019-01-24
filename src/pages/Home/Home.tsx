import classNames from "classnames";
import * as React from "react";

import Prismic from "prismic-javascript";

const RichText = require("prismic-reactjs").RichText;

import bannerImage from "../../assets/images/PawLight.png";
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
          {/* <div className={styles.banner_image}>
            <div className={styles.caption}>
              <div className={styles.article}>
                <span>E</span>nlighten&nbsp;
                <span>Y</span>our&nbsp;
                <span>R</span>esearch
              </div>
              <p>
                Eyra are persistent and possess leadership abilities. Eyra dream
                big and so are their achievements in real world. Eyra can
                transform any idea into reality which make them a master builder
                equipped with ingenuity and innovation.
              </p>
            </div>
          </div> */}
          <div className={styles.bannerBackground} id="demo">
            <span />
            <span />
            <span />
          </div>
          <div className={styles.caption}>
            <div className={styles.article}>
              <span>E</span>nlighten&nbsp;
              <span>Y</span>our&nbsp;
              <span>R</span>esearch
            </div>
            <p>
              Eyra are persistent and possess leadership abilities. Eyra dream
              big and so are their achievements in real world. Eyra can
              transform any idea into reality which make them a master builder
              equipped with ingenuity and innovation.
            </p>
          </div>
          <div className={styles.image}>
            <img src={bannerImage} alt="logo" />
          </div>
        </div>
        <div className={styles.bg}>
          <div className={styles.content}>
            <div className={styles.section}>
              <h3 className={classNames(styles.sectionHeader)}>About Us</h3>

              <FlippingCard />
            </div>
            <div className={styles.section}>
              <h3 className={classNames(styles.sectionHeader)}>News</h3>

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
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
