import { withStyles, WithStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
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
      <Grid container={true} spacing={40}>
        {data.map((card: any, index: number) => (
          <Grid item={true} key={index} sm={4} md={6} lg={4}>
            <Card className={classes.card} onClick={clicked}>
              <CardMedia
                className={classes.media}
                image={ChallengeImage}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom={true} variant="h5" component="h2">
                  {card.title}
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
