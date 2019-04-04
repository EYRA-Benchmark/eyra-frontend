import * as React from "react";

import { RouteComponentProps } from "react-router-dom";

import { prismicApi } from "src/services/prismicApi";
import styles from "./About.module.css";
const RichText = require("prismic-reactjs").RichText;
class About extends React.Component<RouteComponentProps<{}>, {}> {
  state = {
    title: "",
    desc: "",
  };
  componentWillMount() {
    prismicApi.getSingle("aboutus").then((response: any) => {
      const title = RichText.render(response.data.title);
      const desc = RichText.render(response.data.description);
      this.setState({ title, desc });
    });
  }
  public render() {
    const { title, desc } = this.state;
    return (
      <React.Fragment>
        <div className={styles.container}>
          <div className={styles.caption}>
            <div className={styles.article}>
              <h3>{title}</h3>
            </div>

            {desc}
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
