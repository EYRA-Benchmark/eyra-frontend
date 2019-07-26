import * as React from 'react';
import { Grid, Container, Paper } from '@material-ui/core';
const RichText = require('prismic-reactjs').RichText;

import { formatDate } from '../../utils';
import styles from './NewsDetails.css';
import { IPrismicResult, INews } from '../../types/prismic';
import { getPrismicClient } from 'src/services/prismicApi';
import { NextContext } from 'next';

interface IProps {
  title: any;
  desc: any;
  image: string;
  date: string;
}

class NewsDetails extends React.Component<IProps> {
  static async getInitialProps(ctx: NextContext<{ id: string }>): Promise<IProps> {
    const prismicApi = await getPrismicClient();
    const prismicResponse: IPrismicResult<INews> = await prismicApi.getByUID('news', ctx.query.id);
    return {
      title: prismicResponse.data.title,
      desc: prismicResponse.data.description,
      image: prismicResponse.data.image.url,
      date: formatDate(new Date(prismicResponse.data.date)),
    };
  }

  render() {
    const { title, image, desc, date } = this.props;
    return (
      <Container>
        <Paper>
          <Grid container={true} spacing={3} className={styles.container}>
            <Grid container={true} item={true} xs={12}>
              <Grid item={true} xs={2} sm={2} md={2}>
                <div
                  className={styles.coverImage}
                  style={{ backgroundImage: `url(${image})` }}
                />
              </Grid>
              <Grid item={true} xs={9} sm={9} md={9}>
                <div className={styles.headerContainer}>
                  <div className={styles.title}>
                    {RichText.render(title)}
                  </div>
                  <p>{date}</p>
                </div>
              </Grid>
            </Grid>
            <Grid item={true} xs={10} sm={10} md={10}>
              {RichText.render(desc)}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}
export default NewsDetails;
