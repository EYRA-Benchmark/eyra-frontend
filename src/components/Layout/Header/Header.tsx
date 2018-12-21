import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import classNames from "classnames";
import * as React from "react";
import logo from "../../../assets/images/logo.png";
import SearchBar from "../../common/SearchBar/SearchBar";
import Navbar from "../../Navigation/NavigationMenu/NavigationMenu";
import styles from "./Header.module.css";

export interface IProps {
  classes: string;
  isShrink: boolean;
}

function Header({ classes, isShrink }: IProps) {
  return (
    <AppBar position="fixed" className={classes}>
      <Toolbar className={styles.toolbar}>
        <div className={classNames(styles.logo, isShrink && styles.shrink)}>
          <img src={logo} alt="logo" className={styles.logoImage} />
        </div>
        <SearchBar />
        <Navbar />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
