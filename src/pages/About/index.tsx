import * as React from 'react';
import { getPrismicClient } from 'src/services/prismicApi';
const RichText = require('prismic-reactjs').RichText;
import styles from './About.css';

interface IProps {
  title: any;
  desc: any;
}

class About extends React.Component<IProps> {
  static async getInitialProps(...args: any[]): Promise<IProps> {
    const prismicApi = await getPrismicClient();
    const prismicResponse = await prismicApi.getSingle('aboutus');
    return {
      title: prismicResponse.data.title,
      desc: prismicResponse.data.description,
    };
  }

  public render() {
    const { title, desc } = this.props;
    return (
      <React.Fragment>
        <div className={styles.container}>
          <div className={styles.title}>
            {RichText.render(title)}
          </div>
          {RichText.render(desc)}
        </div>
      </React.Fragment>
    );
  }
}

export default About;
