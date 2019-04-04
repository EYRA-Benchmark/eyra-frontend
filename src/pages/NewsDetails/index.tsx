import * as React from 'react';
import { prismicApi } from 'src/services/prismicApi';
import { RouteComponentProps } from 'react-router';
import { Grid } from '@material-ui/core';
const RichText = require('prismic-reactjs').RichText;

import { formatDate } from 'src/utils';
import styles from './NewsDetails.module.css';

class NewsDetails extends React.Component<
  RouteComponentProps<{ id: string }>,
  {}
> {
  state = {
    title: '',
    desc: '',
    image: '',
    date: ''
  };
  componentWillMount() {
    const selectedItem = this.props.match.params.id;
    if (selectedItem) {
      prismicApi.getByUID('news', selectedItem).then((response: any) => {
        if (response) {
          const title = RichText.render(response.data.title);
          const desc = RichText.render(response.data.description);
          const image = response.data.image.url;
          const date = formatDate(new Date(response.first_publication_date));
          this.setState({ title, desc, image, date });
        }
      });
    }
  }
  render() {
    const { title, image, desc, date } = this.state;
    return (
      <Grid container={true} spacing={24}>
        <Grid container={true} item={true} xs={12}>
          <Grid item={true} xs={3} sm={3} md={3}>
            <div
              className={styles.coverImage}
              style={{ backgroundImage: `url(${image})` }}
            />
          </Grid>
          <Grid item={true} xs={9} sm={9} md={9}>
            <div className={styles.headerContainer}>
              <div className={styles.title}>{title}</div>
              <p>{date}</p>
            </div>
          </Grid>
        </Grid>
        <Grid item={true} xs={12} sm={12} md={12}>
          {desc}
        </Grid>
      </Grid>
    );
  }
}
export default NewsDetails;
