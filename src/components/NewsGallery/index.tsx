import { Card, CardMedia, Grid } from '@material-ui/core';

import { CardHeader } from '@material-ui/core';
import * as React from 'react';
import styles from './NewsGallery.css';
import { INews, IPrismicResult } from 'src/types/prismic';
import { formatDate } from 'src/utils';

import Link from 'next/link';

const RichText = require('prismic-reactjs').RichText;

interface IProps {
  size: number;
  data: Array<IPrismicResult<INews>>;
}
const sortByDate = (a: any, b: any) =>
new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
export class NewsGallery extends React.Component<IProps, {}> {
  render() {
    const { size, data } = this.props;

    const filteNews = data
    .sort(sortByDate)
      .slice(0, size > 0 ? size : data.length);

    return (
      <Grid container={true} spacing={3}>
        {filteNews.map((card: IPrismicResult<INews>, index: number) => (
          <Grid item={true} key={index} xs={12} sm={3} md={3}>
            <Link href="/news/[id]" as={`/news/${card.uid}`}>
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
                      variant: 'subtitle2',
                    }}
                    subheaderTypographyProps={{
                      align: 'right',
                      variant: 'caption',
                    }}
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
export default NewsGallery;
