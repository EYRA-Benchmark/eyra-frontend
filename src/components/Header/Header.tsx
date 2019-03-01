import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import logo from '../../assets/images/logo.png';
import Navbar from '../Navigation/NavigationMenu/NavigationMenu';
// import SearchBar from "../SearchBar/SearchBar";
import styles from './Header.module.css';

import { NavLink } from 'react-router-dom';

export interface IOwnProps {
  classes: string;
  drawerToggle: () => void;
}

function Header({ classes, drawerToggle }: IOwnProps) {
  console.log('Header drawing');
  return (
    <AppBar className={classes}>
      <Toolbar className={styles.toolbar}>
        <div className={styles.logo}>
          <NavLink to="/" title="Home" >
            <img src={logo} alt="logo" className={styles.logoImage} />
          </NavLink>
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

export default Header;
