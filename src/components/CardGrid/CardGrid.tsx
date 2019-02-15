import { withStyles, WithStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import ChallengeImage from "../../assets/images/challenge.png";
import styles from "./CardGridStyle";

interface IProps extends WithStyles<typeof styles> {
  classes: any;
  data: any;
  clicked: () => void;
}
export class CardGrid extends React.Component<IProps, {}> {
  render() {
    const { classes, data, clicked } = this.props;
    return (
      <Grid container={true} spacing={24}>
        {data.map((card: any, index: number) => (
          <Grid item={true} key={index} xs={12} sm={4} md={2}>
            <Card className={classes.card} onClick={clicked}>
              <CardMedia
                className={classes.media}
                image={ChallengeImage}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom={true} variant="h5" component="h2">
                  {card.short_name}
                </Typography>
                <Typography>{card.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}
export default withStyles(styles)(CardGrid);
