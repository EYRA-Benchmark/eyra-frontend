import React from "react";

import classNames from "classnames";

import SubscriptionDialog from '../SubscriptionDialog/SubscriptionDialog';
import styles from "./Footer.module.css";
import { Dialog } from '@material-ui/core';

class Footer extends React.Component<{}, { subscriptionDialogOpen: boolean }> {
  state = {
    subscriptionDialogOpen: false
  };

  toggleSubscriptionModal = (enabled: boolean|undefined) => () => {
    const newState = enabled === undefined ?
      !this.state.subscriptionDialogOpen
      : enabled;
    this.setState({ subscriptionDialogOpen: newState });
  }

  render() {
    return (
      <div style={{ position: "relative" }}>
        <div className={classNames(styles.content, styles.bgBlue)}>
          <h3>Stay up to date, sign up for our newsletter</h3>
          <div className={styles.buttonContainer}>
            <Dialog
              open={this.state.subscriptionDialogOpen}
              onClose={this.toggleSubscriptionModal(false)}
            >
              <SubscriptionDialog/>
            </Dialog>
            <button className={styles.sendButton} onClick={this.toggleSubscriptionModal(true)}>
              Subscribe
            </button>
          </div>
        </div>
        <div className={styles.content}>
          <p>
            By{" "}
            <a href="https://www.esciencecenter.nl/" target="_blank">
              Netherlands eScience Center
            </a>{" "}
            & <a href="https://www.surf.nl/">SURF</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
