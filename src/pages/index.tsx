import * as React from 'react';
import Prismic from 'prismic-javascript';
import { Fab } from '@material-ui/core';
import { KeyboardArrowDown as DownIcon } from '@material-ui/icons';
import classNames from 'classnames';
import { getPrismicClient } from 'src/services/prismicApi';
import { comicApi } from 'src/services/comicApi';
import { IBenchmark } from 'src/types';
import ChallengesGrid from 'src/components/BenchmarkCardGrid';
import NewsGallery from 'src/components/NewsGallery';

import styles from './Home.css';
// import BreadCrumbs from 'src/components/BreadCrumbs';
import Head from 'next/head';

interface IProps {
  news: any;
  benchmarks: IBenchmark[];
}

class Index extends React.Component<IProps> {
  static async getInitialProps(...args: any[]): Promise<IProps> {
    const prismicApi = await getPrismicClient();
    const prismicResponse = await prismicApi.query(
      Prismic.Predicates.at('document.type', 'news'),
      {},
    );

    return {
      news: prismicResponse.results ,
      benchmarks: await comicApi.benchmarks(),
    };
  }

  scrollToNext() {
    const benchmarkSection = document.getElementById('benchmarks');
    if (benchmarkSection) {
      benchmarkSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  public render() {
    const challengeContent = (
      <ChallengesGrid size={4} benchmarks={this.props.benchmarks} />
    );
    const newsContent = (
      <NewsGallery size={4} data={this.props.news} />
   );
    return (
      <React.Fragment>
        <Head>
          <title>EYRA Benchmark Platform</title>
          {/* <BreadCrumbs crumbs={[]} /> */}
        </Head>
        <div className={styles.container}>
          <div className={styles.bannerBackground} id="demo">
            <span />
            <span />
            <span />
          </div>
          <div className={styles.caption}>
            <div className={styles.article}>
              <h3>EYRA Benchmark Platform</h3>
            </div>
            <p>Benchmarking algorithms for science</p>
          </div>
          <div className={styles.bannerImage}>
            <img src="/static/images/black_paw.png" alt="logo" />
          </div>
        </div>

        <div className={styles.downBtn}>
          <Fab
            color="primary"
            aria-label="Down"
            onClick={this.scrollToNext}
            title="Scroll Down"
          >
            <DownIcon />
          </Fab>
        </div>

        <div className={styles.bg}>
          <div className={styles.content}>
            <div className={styles.section} id="benchmarks">
              <div className={styles.titleContainer}>
                <h3 className={classNames(styles.sectionHeader)}>Benchmarks</h3>
                {/* <a href="/organize_benchmark">Organize Benchmark</a> */}
              </div>
              {challengeContent}
            </div>
            <div className={styles.section}>
            <div className={styles.titleContainer}>
            <h3 className={classNames(styles.sectionHeader)}>News</h3>
                <a href="/news">More News</a>
              </div>
             {newsContent}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
