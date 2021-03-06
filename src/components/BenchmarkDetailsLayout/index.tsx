import * as React from 'react';
import { IBenchmark } from 'src/types';
import Markdown from '@nteract/markdown';
import classNames from 'classnames';

// import AlgorithmSubmissionForm from 'src/components/Forms/Algorithm/AlgorithmSubmission';
import Leaderboard from 'src/components/Leaderboard';
import DataDescription from 'src/components/DataDescription/';

import { Grid, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import styles from './DetailsLayout.css';

interface IContainerProps {
  children: React.ReactNode;
}
interface IProps {
  data: IBenchmark;
}

function TabContainer(props: IContainerProps) {
  return (
    <Typography
      component="div"
      style={{ padding: 8 * 3 }}
      className={styles.detailsContainer}
    >
      {props.children}
    </Typography>
  );
}

interface IState {
  value: number;
  dialogOpen: boolean;
}
class Details extends React.Component<IProps, IState> {
  state = {
    value: 0,
    dialogOpen: false,
  };
  handleChange = (event: any, value: number) => {
    this.setState({ value });
  }
  toggleModal = (enabled: boolean | undefined) => () => {
    const newState = enabled === undefined ? !this.state.dialogOpen : enabled;
    this.setState({ dialogOpen: newState });
  }
  render() {
    const { value } = this.state;
    const { data } = this.props;
    if (data) {
      return (
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={12} sm={12} md={12}>
            <Paper className={styles.paper}>
              <div className={styles.imageContainer}>
                <img src={data.banner_image} className={styles.bannerImage} />
              </div>

              <div className={classNames(styles.overlay, styles.cover)} />
              <h2>{data.name}</h2>
              <p>{data.short_description}</p>
            </Paper>
          </Grid>
          <Grid item={true} xs={12}>
            <Paper>
              <Tabs
                variant="scrollable"
                value={value}
                onChange={this.handleChange}
                indicatorColor="primary"
                className={styles.tabsContainer}
                scrollButtons="on"
              >
                <Tab label="About" />
                <Tab label="Description" />
                <Tab label="Data" />
                <Tab label="Truth" />
                <Tab label="Metrics" />
                <Tab label="Results" />
                {/* <Tab label="Private Results" /> */}
                <Tab label="Create submission" />
              </Tabs>
              {value === 0 && (
                <TabContainer>
                  <Markdown source={data.about} className={styles.container} />
                </TabContainer>
              )}
              {value === 1 && (
                <TabContainer>
                  <Markdown
                    source={data.description}
                    className={styles.container}
                  />
                </TabContainer>
              )}
              {value === 2 && (
                <TabContainer>
                  <Markdown
                    source={data.data_description}
                    className={styles.container}
                  />

                  {data.data_set ? (
                    <DataDescription datasetId={data.data_set} />
                  ) : null}
                </TabContainer>
              )}
              {value === 3 && (
                <TabContainer>
                  <Markdown
                    source={data.truth_description}
                    className={styles.container}
                  />
                </TabContainer>
              )}
              {value === 4 && (
                <TabContainer>
                  <Markdown
                    source={data.metrics_description}
                    className={styles.container}
                  />
                </TabContainer>
              )}
              {value === 5 && (
                <TabContainer>
                  <Leaderboard benchmarkID={data.id} isPrivate={false} />
                </TabContainer>
              )}
              {/* {value === 5 && (
                <TabContainer>
                  <Leaderboard benchmarkID={data.id} isPrivate={true} />
                </TabContainer>
              )} */}
              {value === 6 && (
                <TabContainer>
                  {/* <AlgorithmSubmissionForm benchmark={data} /> */}
                  <p>
                    If you would like to submit to this benchmark, please send a
                    message to info@eyrabenchmark.net
                  </p>
                </TabContainer>
              )}

              {/* <Dialog
                open={this.state.dialogOpen}
                onClose={this.toggleModal(false)}
                className={styles.formContainer}
              >
                <AlgorithmSubmissionForm benchmarkId={data.id} />
              </Dialog> */}
              {/* <Button
                variant="contained"
                onClick={this.toggleModal(true)}
                id="submit"
              >
                Submit Algorithm
              </Button> */}
            </Paper>
          </Grid>
        </Grid>
      );
    } else {
      return null;
    }
  }
}
export default Details;
