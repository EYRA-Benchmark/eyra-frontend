import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import * as React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Navbar from "../Navigation/NavigationMenu/NavigationMenu";
// import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.css";

export interface IOwnProps {
  classes: string;
  drawerToggle: () => void;
}

function Header({ classes, drawerToggle }: IOwnProps) {
  return (
    <AppBar className={classes}>
      <Toolbar className={styles.toolbar}>
        <div className={styles.logo}>
          <NavLink to="/" title="Home">
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
