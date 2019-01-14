import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import styles from "./Gallary.module.css";
interface IProps {
  data: any;
}
export class Gallary extends React.Component<IProps, {}> {
  render() {
    const { data } = this.props;
    return (
      <Grid container={true} spacing={24}>
        {data.map((card: any, index: number) => (
          <Grid item={true} key={index} xs={12} sm={6} md={4}>
            <Card className={styles.card}>
              <CardContent className={styles.card}>
                <Typography gutterBottom={true} variant="h5" component="h2">
                  {card.title}
                </Typography>
                {card.contents}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}
export default Gallary;
