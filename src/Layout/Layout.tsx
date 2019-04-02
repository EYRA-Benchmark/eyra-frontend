import classNames from "classnames";
import * as React from "react";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import ScrollToTop from "../components/Utils/ScrollToTop";
import styles from "./Layout.module.css";
import Routes from "../Routes";
import Home from "src/pages/Home/Home";
import paw from "../assets/images/PawLight.png";

interface IState {
  isShrink: boolean;
  showSideDrawer: boolean;
}

class Layout extends React.Component<RouteComponentProps<{}>, IState> {
  state = {
    isShrink: false,
    showSideDrawer: false,
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  public handleScroll = () => {
    const el: HTMLElement | null = document.documentElement;
    if (el != null && el.offsetWidth > 1024) {
      this.setState({
        isShrink: document.body.scrollTop > 80 || el.scrollTop > 80,
      });
    }
  }

  public render() {
    const { isShrink } = this.state;
    const isHomePage = this.props.location.pathname === "/";
    return (
      <React.Fragment>
        <Header
          classes={classNames(
            styles.appBar,
            isShrink && styles.shrink,
            isHomePage && styles.homePage,
          )}
          drawerToggle={this.sideDrawerToggleHandler}
        />
        <SideDrawer open={this.state.showSideDrawer} />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact={true} component={Home} />
          </Switch>
          <div id="root_container">
            <main className={styles.container}>
              <div className={styles.bannerBackground} id="about">
                <img src={paw} />
              </div>
              <TransitionGroup style={{ width: "100%", height: "100%" }}>
                <CSSTransition
                  key={location.pathname}
                  classNames="fade"
                  timeout={2000}
                  exit={false}
                >
                  <Switch>
                    <Routes />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </main>
          </div>
        </ScrollToTop>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
