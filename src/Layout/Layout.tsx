import classNames from "classnames";
import * as React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import ReactRouter from "../Routes";
import styles from "./Layout.module.css";

interface IState {
  isShrink: boolean;
  showSideDrawer: boolean;
}

class Layout extends React.Component<{}, IState> {
  state = {
    isShrink: false,
    showSideDrawer: false
  };
  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }
  componentWillMount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }
  public handleScroll = () => {
    const el: HTMLElement | null = document.documentElement;
    if (el != null && el.offsetWidth > 1024) {
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
          drawerToggle={this.sideDrawerToggleHandler}
        />
        <SideDrawer open={this.state.showSideDrawer} />
        <ReactRouter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
