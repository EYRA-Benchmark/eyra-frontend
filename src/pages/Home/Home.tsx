import * as React from "react";

import Prismic from 'prismic-javascript';
// import {Link, RichText, Date} from 'prismic-reactjs';

import FlippingCard from "../../components/FlippingCard/FlippingCard";
import Gallary from "../../components/Gallary/Gallary";
import styles from "./Home.module.css";
import settings from '../../settings';

class Home extends React.Component<{}, {}> {
  data = [{ title: "News1" }, { title: "News2" }, { title: "News3" }];
  state = {
    news: []
  }

  componentWillMount() {

    Prismic.api(settings.prismicEndpoint).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'news'), {}).then((response: any) => {
        if (response) {
          console.log(response.results);
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
            <div className={styles.caption}>
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
            <h3 className={styles.sectionHeader}>About Us</h3>
            <FlippingCard />
          </div>

          <div className={styles.content}>
            <h3 className={styles.sectionHeader}>News</h3>
            <Gallary data={this.state.news.map((n: any) => ({ title: n.data.title[0].text }))} />
          </div>
        </div>
        <div style={{ position: "relative" }} />
      </React.Fragment>
    );
  }
}

export default Home;
