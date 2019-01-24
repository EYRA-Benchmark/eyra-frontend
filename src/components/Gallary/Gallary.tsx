import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import styles from "./Gallary.module.css";
interface IProps {
  data: any;
}
interface IState {
  selectedItem: null;
}
export class Gallary extends React.Component<
  RouteComponentProps<{}> & IProps,
  IState
> {
  public handleSelection = (selectedItem: any) => {
    this.showDetails(selectedItem);
  };
  public showDetails = (item: any) => {
    this.setState({ selectedItem: item });

    localStorage.setItem("NewsData", item.title);
    this.props.history.push({
      pathname: "/news_details"
    });
  };
  render() {
    const { data } = this.props;
    return (
      <Grid container={true} spacing={24}>
        {data.map((card: any, index: number) => (
          <Grid item={true} key={index} xs={12} sm={4} md={3}>
            <Card
              square={true}
              className={styles.card}
              onClick={() => this.handleSelection(card)}
            >
              <CardMedia
                className={styles.media}
                image={card.image}
                title="Image title"
              />
              <CardContent>
                <Typography gutterBottom={true} variant="h6" component="h6">
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}
export default withRouter(Gallary);
