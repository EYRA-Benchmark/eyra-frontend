import React from 'react';
import { Card, CardHeader, CardMedia, IconButton } from '@material-ui/core';
import { IDataset } from 'src/types';
import {
  Description as DetailsIcon,
  Edit as EditIcon,
} from '@material-ui/icons';

import styles from './DatasetCard.css';
import Link from 'next/link';

interface IProps {
  dataset: IDataset;
}

export const DatasetCard = (props: IProps) => {
  const dataset = props.dataset;
  let canEdit = false;
  canEdit = dataset.permissions.indexOf('change_dataset') > -1;

  return (
    <Card square={true} className={styles.card}>
      <Link href="/dataset/[id]" as={`/dataset/${dataset.id}`}>
        <a>
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
                  variant: 'h2',
                }}
              />
            )}
        </a>
      </Link>
    </Card>
  );
};
export const getHeader = (dataset: IDataset) => (
  <CardHeader
    title={dataset.name}
    titleTypographyProps={{
      variant: 'h2',
    }}
    action={
      <div>
        <Link href="/dataset/[id]" as={`/dataset/${dataset.id}`}>
          <a>
            <IconButton title="Details">
              <DetailsIcon />
            </IconButton>
          </a>
        </Link>
        <Link href="/dataset/[id]/edit" as={`/dataset/${dataset.id}/edit`}>
          <a>
            <IconButton title="Edit">
              <EditIcon />
            </IconButton>
          </a>
        </Link>
      </div>
    }
  />
);
