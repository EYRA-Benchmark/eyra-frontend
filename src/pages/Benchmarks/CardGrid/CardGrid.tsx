import * as React from "react";

import { Link } from "react-router-dom";
import { Card, CardHeader, CardMedia, Grid } from "@material-ui/core";
import { IBenchmark } from "src/types";

import ChallengeImage from "src/assets/images/tissue_segmentation.png";
import styles from "./CardGrid.module.css";

interface IProps {
  size: any;
  data: any;
}

function sortByDate(array: IBenchmark[]): void {
  array.sort((a: IBenchmark, b: IBenchmark) => {
    return new Date(a.modified).getTime() - new Date(b.modified).getTime();
  });
}

export class CardGrid extends React.Component<IProps, {}> {
  render() {
    const { size, data } = this.props;

    let filteredData = data;
    if (size !== 0) {
      sortByDate(data);
      filteredData = data.slice(0, size);
    }

    return (
      <Grid container={true} spacing={24}>
        {filteredData.map((card: any, index: number) => (
          <Grid item={true} key={index} xs={12} sm={4} md={4}>
            <Link to={`benchmark/${card.id}`}>
              <Card
                square={true}
                className={styles.card}
              >
                <CardMedia
                  className={styles.media}
                  image={ChallengeImage}
                  title="Image title"
                />
                <CardHeader
                  title={card.name}
                  titleTypographyProps={{
                    variant: "title",
                  }}
                />
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  }
}
export default CardGrid;
