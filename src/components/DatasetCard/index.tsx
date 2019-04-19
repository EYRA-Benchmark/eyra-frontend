import React from "react";
import { Card, CardHeader, CardMedia, IconButton } from "@material-ui/core";
import { IDataset } from "src/types";
import {
  Description as DetailsIcon,
  Edit as EditIcon,
} from "@material-ui/icons";

import styles from "./DatasetCard.module.css";
import { Link } from "react-router-dom";

interface IProps {
  dataset: IDataset;
}

export const DatasetCard = (props: IProps) => {
  const dataset = props.dataset;
  let canEdit = false;
  canEdit = dataset.permissions.indexOf("change_dataset") > -1;

  return (
    <Card square={true} className={styles.card}>
      <Link to={`dataset/${dataset.id}`}>
        <CardMedia
          className={styles.media}
          image={dataset.card_image_url}
          title={dataset.card_image_alttext}
        />
        {canEdit ? (
          getHeader(dataset)
        ) : (
          <CardHeader
            title={dataset.name}
            titleTypographyProps={{
              variant: "title",
            }}
          />
        )}
      </Link>
    </Card>
  );
};
export const getHeader = (dataset: IDataset) => (
  <CardHeader
    title={dataset.name}
    titleTypographyProps={{
      variant: "title",
    }}
    action={
      <div>
        <Link to={`dataset/${dataset.id}`}>
          <IconButton title="Details">
            <DetailsIcon />
          </IconButton>
        </Link>
        <Link to={`edit_dataset/${dataset.id}`}>
          <IconButton title="Edit">
            <EditIcon />
          </IconButton>
        </Link>
      </div>
    }
  />
);
