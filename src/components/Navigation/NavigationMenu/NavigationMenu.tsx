import * as React from "react";
import { NavLink } from "react-router-dom";
import { isLoggedIn, IUserProps, withUser } from "../../../context/User";
import styles from "./NavigationMenu.module.css";

function NavigationMenu({ user, logout }: IUserProps) {
  return (
    <React.Fragment>
      <ul className={styles.nav}>
        <li>
          <NavLink to="/about" activeClassName={styles.active}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/benchmarks" activeClassName={styles.active}>
            Benchmarks
          </NavLink>
        </li>
        <li>
          <NavLink to="/datasets" activeClassName={styles.active}>
            Datasets
          </NavLink>
        </li>
        <li>
          {isLoggedIn(user) ? (
            <NavLink
              onClick={logout}
              to="/login"
              activeClassName={styles.active}
            >
              Logout {user.first_name}
            </NavLink>
          ) : (
            <NavLink to="/login" activeClassName={styles.active}>
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </React.Fragment>
  );
}

export default withUser(NavigationMenu);
