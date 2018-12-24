import * as React from "react";
import FlippingCard from "../../components/FlippingCard/FlippingCard";
import styles from "./Home.module.css";

class Home extends React.Component<{}, {}> {
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

        <div className={styles.content}>
          <h3>About Us</h3>
          <FlippingCard />
        </div>

        <div className={styles.content}>
          <h3>News</h3>
          <FlippingCard />
        </div>

        <div style={{ position: "relative" }} />
      </React.Fragment>
    );
  }
}

export default Home;
