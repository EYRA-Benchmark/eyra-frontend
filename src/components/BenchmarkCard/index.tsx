import React from 'react';
import { Card, CardHeader, CardMedia, IconButton } from '@material-ui/core';
import { IBenchmark } from 'src/types';
import {
  Description as DetailsIcon,
  Edit as EditIcon,
} from '@material-ui/icons';

import styles from './BenchmarkCard.module.css';
import Link from 'next/link';

interface IProps {
  benchmark: IBenchmark;
}

export const BenchmarkCard = (props: IProps) => {
  const benchmark = props.benchmark;
  let canEdit = false;
  canEdit = benchmark.permissions.indexOf('change_benchmark') > -1;

  return (
    <Link href={`/benchmark/${benchmark.id}`}>
      <a>
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
            />
          )}
        </Card>
      </a>
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
        <Link href={`benchmark/${benchmark.id}`}>
          <a>
            <IconButton title="Details">
              <DetailsIcon />
            </IconButton>
          </a>
        </Link>
        <Link href={`edit_benchmark/${benchmark.id}`}>
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
