import { withStyles, WithStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import ChallengeImage from "../../../assets/images/challenge.png";
import styles from "./CardGridStyle";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
interface IProps extends WithStyles<typeof styles> {
  classes: any;
}

export class CardGrid extends React.Component<IProps, {}> {
  render() {
    const { classes } = this.props;
    return (
      <Grid container={true} spacing={40}>
        {cards.map((card, index) => (
          <Grid item={true} key={card} sm={6} md={4} lg={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={ChallengeImage}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom={true} variant="h5" component="h2">
                  {"Challenge" + index}
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(CardGrid);
