import { Card, CardMedia, Grid } from "@material-ui/core";

// import formatDate from "../../../components/Utils/helper";
import { CardHeader } from "@material-ui/core";
import * as React from "react";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import styles from "./NewsGallary.module.css";
interface IProps {
  data: any;
}
export class Gallary extends React.Component<
  RouteComponentProps<{}> & IProps,
  {}
> {
  render() {
    const { data } = this.props;
    return (
      <Grid container={true} spacing={24}>
        {data.map((card: any, index: number) => (
          <Grid item={true} key={index} xs={12} sm={4} md={4}>
            <Link to={`news/${card.uid}`}>
              <Card
                square={true}
                className={styles.card}
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
                    variant: "title",
                  }}
                  subheaderTypographyProps={{ align: "right" }}
                />
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  }
}
export default withRouter(Gallary);
