import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import * as React from 'react';
import Navbar from '../Navigation/NavigationMenu/NavigationMenu';
import styles from './Header.css';
import { withRouter, SingletonRouter } from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';

export interface IOwnProps {
  drawerToggle: () => void;
}

export interface IState {
  isShrink: boolean;
  showSideDrawer: boolean;
}

class Header extends React.Component<IOwnProps & { router: SingletonRouter }, IState> {
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
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  public handleScroll = () => {
    const el: HTMLElement | null = document.documentElement;
    if (el != null && el.offsetWidth > 1024) {
      this.setState({
        isShrink: document.body.scrollTop > 80 || el.scrollTop > 80,
      });
    }
  }

  render() {
    const { drawerToggle, router } = this.props;
    const isHomePage = router!.route === '/';

    return (
      <AppBar
        className={classNames(
          styles.appBar,
          isHomePage && styles.homePage,
          this.state.isShrink && styles.shrink,
        )}
      >
        <Toolbar className={styles.toolbar}>
          <div className={styles.logo}>
            <Link href="/">
              <a title="Home"><img src="/static/images/logo.png" alt="logo" className={styles.logoImage} /></a>
            </Link>
          </div>
          <IconButton
            aria-label="Open drawer"
            onClick={drawerToggle}
            className={styles.drawerToggle}
          >
            <MenuIcon />
          </IconButton>
          {/* <SearchBar /> */}
          <nav className={styles.desktopOnly}>
            <Navbar />
          </nav>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(Header);
