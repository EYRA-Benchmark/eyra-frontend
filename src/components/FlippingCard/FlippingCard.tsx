import Grid from "@material-ui/core/Grid";

import * as React from "react";
import CardBack from "./CardBack/CardBack";
import CardFront from "./CardFront/CardFront";
import styles from "./FlippingCard.module.css";
class FlippingCard extends React.Component {
  render() {
    return (
      <Grid container={true} spacing={40}>
        <Grid item={true} xs={12} sm={4} md={6} lg={4}>
          <div className={styles.cardContainer}>
            <div className={styles.cardBody}>
              <CardBack />
              <CardFront />
            </div>
          </div>
        </Grid>
        <Grid item={true} xs={12} sm={4} md={6} lg={4}>
          <div className={styles.cardContainer}>
            <div className={styles.cardBody}>
              <CardBack />
              <CardFront />
            </div>
          </div>
        </Grid>
        <Grid item={true} xs={12} sm={4} md={6} lg={4}>
          <div className={styles.cardContainer}>
            <div className={styles.cardBody}>
              <CardBack />
              <CardFront />
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}
export default FlippingCard;
