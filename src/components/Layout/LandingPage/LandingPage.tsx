import classNames from "classnames";
import * as React from "react";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import * as styles from "./LandingPage.css";
interface IState {
  isShrink: boolean;
}

class LandingPage extends React.Component<{}, IState> {
  state = {
    isShrink: false
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }
  componentWillMount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }
  public handleScroll = () => {
    const el: HTMLElement | null = document.documentElement;
    if (el != null) {
      if (document.body.scrollTop > 80 || el.scrollTop > 80) {
        this.setState({
          isShrink: true
        });
      } else {
        this.setState({
          isShrink: false
        });
      }
    }
  };

  public render() {
    const { isShrink } = this.state;
    return (
      <React.Fragment>
        <Header
          classes={classNames(styles.appBar, isShrink && styles.shrink)}
        />
        <MainContent />
      </React.Fragment>
    );
  }
}

export default LandingPage;
