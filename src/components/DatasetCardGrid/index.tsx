import * as React from 'react';

import { Grid } from '@material-ui/core';
import { IDataset } from 'src/types';

import { DatasetCard } from 'src/components/DatasetCard';

interface IProps {
  size: number;
  datasets: IDataset[];
}

const sortByDate = (a: IDataset, b: IDataset) =>
  new Date(a.modified).getTime() - new Date(b.modified).getTime();

export class CardGrid extends React.Component<IProps, {}> {
  render() {
    const { size, datasets } = this.props;

    const filteredDatasets = datasets
      .sort(sortByDate)
      .slice(0, size > 0 ? size : datasets.length);

    return (
      <Grid container={true} spacing={10}>
        {filteredDatasets.map((dataset, index: number) => (
          <Grid item={true} key={index} xs={12} sm={4} md={4}>
            <DatasetCard dataset={dataset} />
          </Grid>
        ))}
      </Grid>
    );
  }
}
export default CardGrid;
