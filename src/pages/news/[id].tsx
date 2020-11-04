import * as React from 'react';
import { Grid, Container, Paper } from '@material-ui/core';
const RichText = require('prismic-reactjs').RichText;

import { formatDate } from '../../utils';
import styles from './NewsDetails.css';
import { getPrismicClient } from 'src/services/prismicApi';
import { NextPageContext } from 'next';
// import BreadCrumbs from 'src/components/BreadCrumbs';
import Head from 'next/head';

interface IProps {
  title: any;
  desc: any;
  image: string;
  date: string;
  id: string;
}

class NewsDetails extends React.Component<IProps> {
  static async getInitialProps(ctx: NextPageContext): Promise<IProps> {
    const prismicApi = await getPrismicClient();
    const prismicResponse= await prismicApi.getByUID(
      'news',
      ctx.query.id as string,
    ) ;
    return {
      title: prismicResponse.data.title,
      desc: prismicResponse.data.description,
      image: prismicResponse.data.image.url,
      id: ctx.query.id as string,
      date: formatDate(new Date(prismicResponse.data.date)),
    };
  }

  render() {
    const { title, image, desc, date} = this.props;
    return (
      <Container>
        <Head>
          <title>{title[0].text} | EYRA Benchmark Platform</title>
          {/* <BreadCrumbs
            crumbs={[
              {
                id: 'news',
                name: 'News',
              },
              {
                id: `news/${id}`,
                name: title[0].text,
              },
            ]}
          /> */}
        </Head>
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
                  <div className={styles.title}>{RichText.render(title)}</div>
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
