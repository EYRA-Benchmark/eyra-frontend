import { Card, CardMedia, Grid } from '@material-ui/core';

import { CardHeader } from '@material-ui/core';
import * as React from 'react';
import styles from './NewsGallery.css';
import { INews, IPrismicResult } from 'src/types/prismic';
import { formatDate } from 'src/utils';

import { Link } from 'src/routes';

const RichText = require('prismic-reactjs').RichText;

interface IProps {
  data: Array<IPrismicResult<INews>>;
}

export class Gallery extends React.Component<
  IProps,
  {}
  > {
  render() {
    const { data } = this.props;

    return (
      <Grid container={true} spacing={3}>
        {data.map((card: IPrismicResult<INews>, index: number) => (
          <Grid item={true} key={index} xs={12} sm={4} md={4}>
            <Link route="news" params={{ id: card.uid! }}>
              <a className={styles.link}>
                <Card square={true} className={styles.card}>
                  <CardMedia
                    className={styles.media}
                    image={card.data.image.url}
                    title="Image title"
                  />
                  <CardHeader
                    classes={{ title: styles.title }}
                    title={RichText.asText(card.data.title)}
                    subheader={formatDate(new Date(card.data.date))}
                    titleTypographyProps={{
                      variant: 'h6',
                    }}
                    subheaderTypographyProps={{ align: 'right' }}
                  />
                </Card>
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  }
}
export default Gallery;
