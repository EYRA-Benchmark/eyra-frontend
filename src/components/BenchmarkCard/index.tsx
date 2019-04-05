import React from 'react';
import { Card, CardHeader, CardMedia, IconButton } from '@material-ui/core';
import { IBenchmark } from 'src/types';
import {
  Description as DetailsIcon,
  Edit as EditIcon
} from '@material-ui/icons';

import FRBImage from 'src/assets/images/FRB.jpg';
import styles from './BenchmarkCard.module.css';
import { Link } from 'react-router-dom';

interface IProps {
  benchmark: IBenchmark;
}

export const BenchmarkCard = (props: IProps) => {
  const benchmark = props.benchmark;
  const canEdit = benchmark.permissions.indexOf('change_benchmark') > -1;

  return (
    <Card square={true} className={styles.card}>
      <Link to={`benchmark/${benchmark.id}`}>
        <CardMedia
          className={styles.media}
          image={FRBImage}
          title="Image title"
        />
      </Link>
      {canEdit ? (
        getHeader(benchmark)
      ) : (
        <CardHeader
          title={benchmark.name}
          titleTypographyProps={{
            variant: 'title'
          }}
        />
      )}
    </Card>
  );
};
export const getHeader = (benchmark: IBenchmark) => (
  <CardHeader
    title={benchmark.name}
    titleTypographyProps={{
      variant: 'title'
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
);
