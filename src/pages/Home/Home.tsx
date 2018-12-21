import * as React from "react";
import FlippingCard from "../../components/common/Flipping_Card/Flipping_Card";
import styles from "./Home.module.css";

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
        <div className={styles.container}>
          <div className={`${styles.image} ${styles.banner_image}`}>
            <div className={styles.caption}>
              {/* <span className={styles.article}>
                Benchmark For Your Algorithms
              </span> */}
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <h3>Parallax Demo</h3>
          <FlippingCard />
        </div>
        <div className={`${styles.image} ${styles.bgimg_2}`} />

        <div style={{ position: "relative" }} />
      </React.Fragment>
    );
  }
}

export default Home;
