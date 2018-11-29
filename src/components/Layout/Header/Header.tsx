import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import * as React from "react";
import logo from "../../../assets/images/logo.svg";
import Navbar from "../../Navigation/NavigationMenu/NavigationMenu";
import * as styles from "./Header.css";
export interface IProps {
  classes: string;
}

function Header({ classes }: IProps) {
  return (
    <AppBar position="fixed" className={classes}>
      <Toolbar className={styles.toolbar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" className={styles.logoImage} />
        </div>
        <Navbar />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
