import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

// import bannerImage from "../../assets/images/black_paw.png";

import styles from "./About.module.css";

// import paw from "../../assets/images/PawLight.png";

class About extends React.Component<RouteComponentProps<{}>, {}> {
  public render() {
    return (
      <React.Fragment>
        <div className={styles.container}>
          {/* <div className={styles.bannerBackground} id="about">
            <img src={paw} />
          </div> */}
          <div className={styles.caption}>
            <div className={styles.article}>
              <h3>About the EYRA Benchmark Platform</h3>
            </div>
            <p>
              The Enlighten Your Research Alliance (EYRA) benchmark platform is
              a tool for the evaluation of scientific algorithms. It is
              developed by the{" "}
              <a href="https://esciencecenter.nl">
                Netherlands eScience Center
              </a>
              , in conjunction with <a href="https://surfsara.nl">SURFsara</a>.
            </p>
            <p>
              The goal of this platform is to provide a place to test the
              performance of algorithms on various challenges, to enable easy
              re-use of data and ground truth for new challenges to answer new
              research questions, and to provide more sustainability for
              challenges.
            </p>
          </div>
          <div className={styles.people_banner}>
            <img
              className={styles.people}
              src={
                "https://www.esciencecenter.nl/img/team/Adrienne_Mendrik-eScience-web.jpg"
              }
              alt={"foto Adriënne Mendrik"}
              title={"Adriënne Mendrik"}
            />
            <img
              className={styles.people}
              src={"https://www.esciencecenter.nl/img/team/roel.jpg"}
              alt={"foto Roel Zinkstok"}
              title={"Roel Zinkstok"}
            />
            <img
              className={styles.people}
              src={"https://www.esciencecenter.nl/img/team/Tom_%28002%29.jpg"}
              alt={"foto Tom Klaver"}
              title={"Tom Klaver"}
            />
            <img
              className={styles.people}
              src={"https://www.esciencecenter.nl/img/team/pawar_%281%29.jpg"}
              alt={"foto Pushpanjali Pawar"}
              title={"Pushpanjali Pawar"}
            />
            <img
              className={styles.people}
              src={
                "https://www.esciencecenter.nl/img/team/carlos-martinez-ortiz.jpg"
              }
              alt={"foto Carlos Martinez-Ortiz"}
              title={"Carlos Martinez-Ortiz"}
            />
            <img
              className={styles.people}
              src={
                "https://www.esciencecenter.nl/img/team/maarten-van-meersbergen-new.jpg"
              }
              alt={"foto Maarten van Meersbergen"}
              title={"Maarten van Meersbergen"}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
