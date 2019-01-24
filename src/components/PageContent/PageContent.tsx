import * as React from "react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Pages from "../../Routes";
import styles from "./PageContent.module.css";
class PageContent extends React.Component<RouteComponentProps<{}>, {}> {
  render() {
    const currentPath = this.props.location.pathname;
    if (currentPath === "/") {
      return (
        <React.Fragment>
          <Route path="/" component={Home} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className={styles.bg}>
            <main className={styles.container}>
              <Pages />
            </main>
          </div>
        </React.Fragment>
      );
    }
  }
}
export default withRouter(PageContent);
