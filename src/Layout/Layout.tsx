import classNames from "classnames";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Pages from "../components/PageContent/PageContent";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import ScrollToTop from "../components/Utils/ScrollToTop";
import styles from "./Layout.module.css";

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
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
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
    const isHomePage = this.props.location.pathname === '/';
    return (
      <React.Fragment>
        <Header
          classes={classNames(
            styles.appBar,
            isShrink && styles.shrink,
            isHomePage && styles.homePage
          )}
          drawerToggle={this.sideDrawerToggleHandler}
        />
        <SideDrawer open={this.state.showSideDrawer} />
        <ScrollToTop>
          <Pages />
        </ScrollToTop>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
