import { Grid } from '@material-ui/core';
import * as React from 'react';
import CardBack from './CardBack/CardBack';
import CardFront from './CardFront/CardFront';
import styles from './FlippingCard.css';

class FlippingCard extends React.Component {
  render() {
    return (
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12} sm={6} md={4}>
          <div className={styles.cardContainer}>
            <div className={styles.cardBody}>
              <CardBack />
              <CardFront name="Benchmark 1" />
            </div>
          </div>
        </Grid>
        <Grid item={true} xs={12} sm={6} md={4}>
          <div className={styles.cardContainer}>
            <div className={styles.cardBody}>
              <CardBack />
              <CardFront name="Benchmark 2" />
            </div>
          </div>
        </Grid>
        <Grid item={true} xs={12} sm={6} md={4}>
          <div className={styles.cardContainer}>
            <div className={styles.cardBody}>
              <CardBack />
              <CardFront name="Benchmark 3" />
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}
export default FlippingCard;
