import * as React from "react";

import { NavLink } from "react-router-dom";
import * as styles from "./NavigationMenu.css";

function NavigationMenu() {
  return (
    <React.Fragment>
      <ul className={styles.nav}>
        <li>
          <NavLink to="/home" activeClassName={styles.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/challenges" activeClassName={styles.active}>
            Challenges
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName={styles.active}>
            LogIn
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default NavigationMenu;
