import * as React from 'react';
import { getPrismicClient } from 'src/services/prismicApi';
const RichText = require('prismic-reactjs').RichText;
import styles from './About.module.css';

interface IProps {
  title: string;
  desc: string;
}

class About extends React.Component<IProps> {
  static async getInitialProps(...args: any[]): Promise<IProps> {
    const prismicApi = await getPrismicClient();
    const prismicResponse = await prismicApi.getSingle('aboutus');
    return {
      title: RichText.render(prismicResponse.data.title),
      desc: RichText.render(prismicResponse.data.description),
    };
  }

  public render() {
    const { title, desc } = this.props;
    return (
      <React.Fragment>
        <div className={styles.container}>
          <div className={styles.caption}>
            <div className={styles.article}>
              <h3>{title}</h3>
            </div>

            {desc}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
