import * as React from "react";

import { RouteComponentProps } from "react-router-dom";

import { prismicApi } from "../../services/prismicApi";
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
  componentDidUpdate(prevProps: any) {
    if (this.props.location !== prevProps.location) {
      if (this.props.location.hash !== "") {
        const id = this.props.location.hash.substring(1);
        const element: HTMLElement | null = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
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
        </div>
      </React.Fragment>
    );
  }
}

export default About;
