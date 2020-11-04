import * as React from 'react';
import Prismic from 'prismic-javascript';
import { getPrismicClient } from 'src/services/prismicApi';
import Head from 'next/head';
import { Typography, Container } from '@material-ui/core';
import NewsGallary from 'src/components/NewsGallery';

interface IState {
    news: any;
  }
interface IProps {
    news: any;
  }

class News extends React.Component<IProps, IState> {
    async refresh() {
        const prismicApi = await getPrismicClient();
        const prismicResponse = await prismicApi.query(
            Prismic.Predicates.at('document.type', 'news'),
            {},
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
        nextContext: any,
      ): void {
        this.refresh();
      }

    static async getInitialProps(...args: any[]): Promise<IProps> {
        const prismicApi = await getPrismicClient();
        const prismicResponse = await prismicApi.query(
            Prismic.Predicates.at('document.type', 'news'),
            {},
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
        <NewsGallary data={this.state.news} size={0}/>
      </Container>
    );
  }
}
export default News;
