import classNames from 'classnames';
import * as React from 'react';
import Navbar from '../Navigation/NavigationMenu/NavigationMenu';
import styles from './SideDrawer.module.css';
export interface IProps {
  open: boolean;
}

function SideDrawer({ open }: IProps) {
  return (
    <div
      className={classNames(
        styles.sideDrawer,
        open ? styles.open : styles.close,
      )}
    >
      <nav>
        <Navbar />
      </nav>
    </div>
  );
}

export default SideDrawer;
