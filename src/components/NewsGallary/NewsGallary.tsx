import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

// import formatDate from "../../../components/Utils/helper";
import { CardHeader } from "@material-ui/core";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import styles from "./NewsGallary.module.css";
interface IProps {
  data: any;
}
export class Gallary extends React.Component<
  RouteComponentProps<{}> & IProps,
  {}
> {
  public handleSelection = (selectedItem: any) => {
    this.showDetails(selectedItem);
  };
  public showDetails = (item: any) => {
    this.props.history.push({
      pathname: "news_details",
      state: { selectedItem: item.uid }
    });
  };
  render() {
    const { data } = this.props;
    return (
      <Grid container={true} spacing={24}>
        {data.map((card: any, index: number) => (
          <Grid item={true} key={index} xs={12} sm={4} md={4}>
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
              <CardHeader
                title={card.title}
                subheader={card.date}
                titleTypographyProps={{
                  variant: "title"
                }}
                subheaderTypographyProps={{ align: "right" }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}
export default withRouter(Gallary);
