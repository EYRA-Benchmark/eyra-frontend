import classNames from "classnames";
import * as React from "react";
import FlippingCard from "../../components/FlippingCard/FlippingCard";
import Gallary from "../../components/Gallary/Gallary";
import styles from "./Home.module.css";
class Home extends React.Component<{}, {}> {
  data = [{ title: "News1" }, { title: "News2" }, { title: "News3" }];
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
            <Gallary data={this.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
