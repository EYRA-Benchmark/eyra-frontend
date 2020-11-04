import * as React from 'react';
import Prismic from 'prismic-javascript';
import { INews, IPrismicResult } from 'src/types/prismic';
import { getPrismicClient } from 'src/services/prismicApi';
import Head from 'next/head';
import { Typography, Container } from '@material-ui/core';
import NewsGallary from 'src/components/NewsGallery';

interface IState {
    news: Array<IPrismicResult<INews>>;
  }
interface IProps {
    news: Array<IPrismicResult<INews>>;
  }

class News extends React.Component<IProps, IState> {
    async refresh() {
        const prismicApi = await getPrismicClient();
        const prismicResponse = await prismicApi.query(
            Prismic.Predicates.at('document.type', 'news'),
            {}
        );
        this.setState({
          news: prismicResponse.results,
        });
      }
    
      componentWillMount() {
        this.setState({news: this.props.news });
      }
    
      componentWillReceiveProps(
        nextProps: Readonly<IProps>,
        nextContext: any
      ): void {
        this.refresh();
      }
    

    static async getInitialProps(...args: any[]): Promise<IProps> {
        const prismicApi = await getPrismicClient();
        const prismicResponse = await prismicApi.query(
            Prismic.Predicates.at('document.type', 'news'),
            {}
        );
        return {
            news: prismicResponse.results,
        };
    }

  public render() {
    return (
      <Container>
        <Head>
          <title>News| EYRA Benchmark Platform</title>
        </Head>
        <Typography component="h1" variant="h5">
          News
        </Typography>
        <NewsGallary data={this.state.news}></NewsGallary>
      </Container>
    );
  }
}
export default News;
