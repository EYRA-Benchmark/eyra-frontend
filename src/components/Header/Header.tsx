import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import * as React from 'react';
import Navbar from '../Navigation/NavigationMenu/NavigationMenu';
import styles from './Header.module.css';
import Link from 'next/link';

export interface IOwnProps {
  classes: string;
  drawerToggle: () => void;
}

function Header({ classes, drawerToggle }: IOwnProps) {
  return (
    <AppBar className={classes}>
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
          {/*<MenuIcon />*/}
        </IconButton>
        {/* <SearchBar /> */}
        <nav className={styles.desktopOnly}>
          <Navbar />
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
