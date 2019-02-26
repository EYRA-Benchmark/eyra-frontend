import { Card, CardHeader, CardMedia } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import * as React from "react";
import ChallengeImage from "../../../assets/images/challenge.png";
import styles from "./CardGrid.module.css";
interface IProps {
  data: any;
  clicked: (item: any) => void;
}
export class CardGrid extends React.Component<IProps, {}> {
  render() {
    const { data, clicked } = this.props;
    return (
      <Grid container={true} spacing={24}>
        {data.map((card: any, index: number) => (
          <Grid item={true} key={index} xs={12} sm={4} md={4}>
            <Card
              square={true}
              className={styles.card}
              onClick={() => clicked(card.id)}
            >
              <CardMedia
                className={styles.media}
                image={ChallengeImage}
                title="Image title"
              />
              <CardHeader
                title={card.name}
                titleTypographyProps={{
                  variant: "title"
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}
export default CardGrid;
