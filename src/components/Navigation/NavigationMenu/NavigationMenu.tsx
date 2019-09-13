import * as React from 'react';
import Link from 'next/link';
import { Menu, MenuItem } from '@material-ui/core';

import { isLoggedIn, IUserProps, withUser } from 'src/context/User';
import LoginDialog from 'src/components/LoginDialog';
import styles from './NavigationMenu.css';

function NavigationMenu({ user, logout }: IUserProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLAnchorElement>(null);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const [loginDialogOpen, setLoginDialogOpen] = React.useState(false);
  React.useEffect(() => {
    if (user) {
      // user just logged in
      setLoginDialogOpen(false);
    }
  });
  return (
    <React.Fragment>
      {loginDialogOpen && (
        <LoginDialog open={true} onClose={() => setLoginDialogOpen(false)} />
      )}

      <ul className={styles.nav}>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/benchmarks">
            <a>Benchmarks</a>
          </Link>
        </li>
        <li>
          <Link href="/tutorials">
            <a>Tutorials</a>
          </Link>
        </li>
        {/*<li>*/}
        {/*<NavLink to="/datasets" activeClassName={styles.active}>*/}
        {/*Datasets*/}
        {/*</NavLink>*/}
        {/*</li>*/}
        <li>
          {isLoggedIn(user) ? (
            <>
              <a aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {user.first_name}
              </a>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted={true}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link href="/profile">
                    <a>
                      Profile
                    </a>
                  </Link>
                </MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
              <a href="#" onClick={() => setLoginDialogOpen(true)}>Login</a>
            )}
        </li>
      </ul>
    </React.Fragment>
  );
}

export default withUser(NavigationMenu);
