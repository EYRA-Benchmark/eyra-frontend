import React from 'react';
import { Card, CardHeader, CardMedia, IconButton } from '@material-ui/core';
import { IBenchmark } from 'src/types';
import {
  Description as DetailsIcon,
  Edit as EditIcon,
} from '@material-ui/icons';

import styles from './BenchmarkCard.css';
import Link from 'next/link';

interface IProps {
  benchmark: IBenchmark;
}

const canEdit = (benchmark: IBenchmark) => {
  return benchmark.permissions.indexOf('change_benchmark') > -1;
};

export const BenchmarkCard = (props: IProps) => {
  const benchmark = props.benchmark;
  return (
    <Link href="/benchmark/[id]" as={`/benchmark/${benchmark.id}`}>
      {/* <a className={styles.links}> */}
      <Card square={true} className={styles.card}>
        <CardMedia
          className={styles.media}
          image={benchmark.card_image}
          title="Image title"
        />
        <BenchmarkHeader benchmark={benchmark} />
      </Card>
      {/* </a> */}
    </Link>
  );
};

export const BenchmarkHeader = ({ benchmark }: { benchmark: IBenchmark }) => (
  <CardHeader
    classes={{ title: styles.title }}
    title={benchmark.name}
    titleTypographyProps={{
      variant: 'subtitle2',
    }}
    action={
      canEdit(benchmark) && (
        <div>
          <Link href="/benchmark/[id]" as={`/benchmark/${benchmark.id}`}>
            <a className={styles.link}>
              <IconButton title="Details">
                <DetailsIcon />
              </IconButton>
            </a>
          </Link>
          <Link
            href="/benchmark/[id]/edit"
            as={`/benchmark/${benchmark.id}/edit`}
          >
            <a className={styles.link}>
              <IconButton title="Edit">
                <EditIcon />
              </IconButton>
            </a>
          </Link>
        </div>
      )
    }
  />
);
