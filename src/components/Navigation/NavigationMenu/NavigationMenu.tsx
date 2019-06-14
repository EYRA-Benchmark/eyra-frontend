import * as React from 'react';
import { isLoggedIn, IUserProps, withUser } from 'src/context/User';
import styles from './NavigationMenu.module.css';

import { Link } from 'src/routes';
import LoginDialog from 'src/components/LoginDialog';

function NavigationMenu({ user, logout }: IUserProps) {
  const [ loginDialogOpen, setLoginDialogOpen ] = React.useState(false);
  React.useEffect(() => {
    if (user) {
      // user just logged in
      setLoginDialogOpen(false);
    }
  });
  return (
    <React.Fragment>
      { loginDialogOpen && (
        <LoginDialog open={true} onClose={() => setLoginDialogOpen(false)}/>
      )}

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
              <a href="#" onClick={logout}>Logout {user.first_name}</a>
          ) : (
            <a href="#" onClick={() => setLoginDialogOpen(true)}>Login</a>
          )}
        </li>
      </ul>
    </React.Fragment>
  );
}

export default withUser(NavigationMenu);
