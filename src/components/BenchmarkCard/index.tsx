import React from "react";
import { Card, CardHeader, CardMedia } from "@material-ui/core";
import { IBenchmark } from "src/types";
import ChallengeImage from "src/assets/images/tissue_segmentation.png";
import styles from "./BenchmarkCard.module.css";

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
      />
    </Card>
  );
};
