import { Dialog, Button } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import SubscriptionDialog from '../SubscriptionDialog/SubscriptionDialog';
import styles from './Footer.css';

class Footer extends React.Component<{}, { subscriptionDialogOpen: boolean }> {
  state = {
    subscriptionDialogOpen: false,
  };

  toggleSubscriptionModal = (enabled: boolean | undefined) => () => {
    const newState =
      enabled === undefined ? !this.state.subscriptionDialogOpen : enabled;
    this.setState({ subscriptionDialogOpen: newState });
  }

  render() {
    return (
      <div>
        <div className={classNames(styles.content, styles.bgBlue)}>
          <h3>Subscribe To Stay Up To Date</h3>
          <div className={styles.buttonContainer}>
            <Dialog
              open={this.state.subscriptionDialogOpen}
              onClose={this.toggleSubscriptionModal(false)}
            >
              <SubscriptionDialog />
            </Dialog>
            <Button
              variant="contained"
              onClick={this.toggleSubscriptionModal(true)}
              id="subscribe"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className={classNames(styles.content, styles.bgDark)}>
          <p>
            By{' '}
            <a href="https://www.esciencecenter.nl/" target="_blank">
              Netherlands eScience Center
            </a>{' '}
            & <a href="https://www.surf.nl/">SURF</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
