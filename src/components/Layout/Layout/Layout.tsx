import classNames from "classnames";
import * as React from "react";
import Modal from "../../common/UI/Modal/Modal";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import styles from "./Layout.module.css";

interface IState {
  isShrink: boolean;
  showModal: boolean;
}

class Layout extends React.Component<{}, IState> {
  state = {
    isShrink: false,
    showModal: false
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
  public handleShowModal = () => {
    this.setState({
      showModal: true
    });
  };
  public handleHideModal = () => {
    this.setState({
      showModal: false
    });
  };
  public render() {
    const { isShrink, showModal } = this.state;
    return (
      <React.Fragment>
        <Modal show={showModal} clicked={this.handleHideModal} />
        <Header
          classes={classNames(styles.appBar, isShrink && styles.shrink)}
          isShrink={isShrink}
        />
        <MainContent />
        <Footer showModal={this.handleShowModal} />
      </React.Fragment>
    );
  }
}

export default Layout;
