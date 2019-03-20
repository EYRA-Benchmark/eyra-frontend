import { Card, CardHeader, CardMedia } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import ChallengeImage from '../../../assets/images/tissue_segmentation.png';
import styles from './CardGrid.module.css';
interface IProps {
  size: any;
  data: any;
  clicked: (item: any) => void;
}

interface IBenchmarkData {
  id: string;
  created: Date;
  modified: Date;
  description: string;
  name: string;
  creator: number;
  evaluator: string;
  training_datafile: any;
  test_datafile: string;
  ground_truth_datafile: string;
}

function sortByDate(array: IBenchmarkData[]): void {
  array.sort((a: IBenchmarkData, b: IBenchmarkData) => {
    return a.modified.getTime() - b.modified.getTime();
  });
}

export class CardGrid extends React.Component<IProps, {}> {
  render() {
    const { size, data, clicked } = this.props;

    let filteredData = data;
    if (size !== 0) {
      sortByDate(data);
      filteredData = data.slice(0, size);
    }

    return (
      <Grid container={true} spacing={24}>
        {filteredData.map((card: any, index: number) => (
          <Grid item={true} key={index} xs={12} sm={4} md={4}>
            <Card
              square={true}
              className={styles.card}
              onClick={() => clicked(card.id)}
            >
              <CardMedia
                className={styles.media}
                image={ChallengeImage}
                title="Image title"
              />
              <CardHeader
                title={card.name}
                titleTypographyProps={{
                  variant: 'title'
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}
export default CardGrid;
