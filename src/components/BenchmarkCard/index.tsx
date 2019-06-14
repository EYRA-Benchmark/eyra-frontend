import React from 'react';
import { Card, CardHeader, CardMedia, IconButton } from '@material-ui/core';
import { IBenchmark } from 'src/types';
import {
  Description as DetailsIcon,
  Edit as EditIcon,
} from '@material-ui/icons';

import styles from './BenchmarkCard.module.css';
import { Link } from 'src/routes';

interface IProps {
  benchmark: IBenchmark;
}

export const BenchmarkCard = (props: IProps) => {
  const benchmark = props.benchmark;
  let canEdit = false;
  canEdit = benchmark.permissions.indexOf('change_benchmark') > -1;

  return (
    <Link route="benchmarkDetails" params={{ id: benchmark.id }}>

      <Card square={true} className={styles.card}>
        <CardMedia
          className={styles.media}
          image={benchmark.image}
          title="Image title"
        />
        {canEdit ? (
          getHeader(benchmark)
        ) : (
            <CardHeader
              title={benchmark.name}
              titleTypographyProps={{
                variant: 'h6',
              }}
              className={styles.header}
            />
          )}
      </Card>

    </Link>
  );
};
export const getHeader = (benchmark: IBenchmark) => (
  <CardHeader
    title={benchmark.name}
    titleTypographyProps={{
      variant: 'h1',
    }}
    action={
      <div>
        <Link route="benchmarkDetails" params={{ id: benchmark.id }}>

          <IconButton title="Details">
            <DetailsIcon />
          </IconButton>

        </Link>
        <Link route="benchmarkEdit" params={{ id: benchmarkId }}>

          <IconButton title="Edit">
            <EditIcon />
          </IconButton>

        </Link>
      </div>
    }
  />
);
