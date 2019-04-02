import React from "react";
import { Card, CardHeader, CardMedia, IconButton } from "@material-ui/core";
import { IBenchmark } from "src/types";
import { Description as DetailsIcon, Edit as EditIcon } from "@material-ui/icons";

import ChallengeImage from "src/assets/images/tissue_segmentation.png";
import styles from "./BenchmarkCard.module.css";
import { Link } from "react-router-dom";

interface IProps {
  benchmark: IBenchmark;
}

export const BenchmarkCard = (props: IProps) => {
  const benchmark = props.benchmark;
  return (
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
        title={benchmark.name}
        titleTypographyProps={{
          variant: "title",
        }}
        action={
          <div>
            <Link to={`benchmark/${benchmark.id}`}>
              <IconButton title="Details">
                <DetailsIcon />
              </IconButton>
            </Link>
            <Link to={`edit_benchmark/${benchmark.id}`}>
              <IconButton title="Edit">
                <EditIcon />
              </IconButton>
            </Link>
          </div>
        }
      />
    </Card>
  );
};
