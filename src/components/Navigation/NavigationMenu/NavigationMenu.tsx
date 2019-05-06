import * as React from 'react';
import { isLoggedIn, IUserProps, withUser } from 'src/context/User';
import styles from './NavigationMenu.module.css';

import { Link } from 'src/routes';

function NavigationMenu({ user, logout }: IUserProps) {
  return (
    <React.Fragment>
      <ul className={styles.nav}>
        <li>
          <Link route="about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link route="benchmarks">
            <a>Benchmarks</a>
          </Link>
        </li>
        {/*<li>*/}
          {/*<NavLink to="/datasets" activeClassName={styles.active}>*/}
            {/*Datasets*/}
          {/*</NavLink>*/}
        {/*</li>*/}
        <li>
          {isLoggedIn(user) ? (
              <a onClick={logout}>Logout {user.first_name}</a>
          ) : (
            <Link route="login">
              <a>Login</a>
            </Link>
          )}
        </li>
      </ul>
    </React.Fragment>
  );
}

export default withUser(NavigationMenu);
