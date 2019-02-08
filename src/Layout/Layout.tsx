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
  isHomePage: boolean;
}

class Layout extends React.Component<RouteComponentProps<{}>, IState> {
  state = {
    isShrink: false,
    showSideDrawer: false,
    isHomePage: true
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  componentWillMount() {
    this.props.history.listen((location, action) => {
      if (!(location.pathname === "/")) {
        this.setState({
          isHomePage: false
        });
      }
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
    console.log(this.state.isHomePage);
    const { isShrink, isHomePage } = this.state;
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
