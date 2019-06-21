import { Grid, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import Markdown from '@nteract/markdown';
import * as React from 'react';
import AlgorithmSubmissionForm from '../../../components/Forms/Algorithm/AlgorithmSubmission';
// import Datasets from './DataSets/DataSets';
import styles from './DetailsLayout.css';
import Leaderboard from '../../../components/Leaderboard';

import classNames from 'classnames';
import { IBenchmark } from '../../../types/benchmark';
import DataDescription from '../../../components/DataDescription/';

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
    const newState =
      enabled === undefined ? !this.state.dialogOpen : enabled;
    this.setState({ dialogOpen: newState });
  }
  render() {

    const { value } = this.state;
    const { data } = this.props;
    if (data) {
      return (
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={12} sm={12} md={12}>
            <Paper className={styles.paper} >
              <div className={styles.imageContainer}>
                <img src={data.banner_image_url} className={styles.bannerImage} />
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
              >
                <Tab label="Description" />
                <Tab label="Data" />
                <Tab label="Truth" />
                <Tab label="Metrics" />
                <Tab label="Results" />
                <Tab label="Private Results" />
                <Tab label="Create submission" />
              </Tabs>
              {value === 0 && (
                <TabContainer>
                  <Markdown
                    source={data.description}
                    className={styles.container}
                  />
                </TabContainer>
              )}
              {value === 1 && (
                <TabContainer>
                  <Markdown
                    source={data.data_description}
                    className={styles.container}
                  />

                  {data.data_set ? <DataDescription datasetId={'1facb4ff-e2c0-4e5e-9e2e-c0476662d33d'} /> : null}
                </TabContainer>
              )}
              {value === 2 && (
                <TabContainer>
                  <Markdown
                    source={data.truth_description}
                    className={styles.container}
                  />
                </TabContainer>
              )}
              {value === 3 && (
                <TabContainer>
                  <Markdown
                    source={data.metrics_description}
                    className={styles.container}
                  />
                </TabContainer>
              )}
              {value === 4 && (
                <TabContainer>
                  <Leaderboard benchmarkID={data.id} isPrivate={false} />
                </TabContainer>
              )}
              {value === 5 && (
                <TabContainer>
                  <Leaderboard benchmarkID={data.id} isPrivate={true} />
                </TabContainer>
              )}
              {value === 6 && (
                <TabContainer>
                  <AlgorithmSubmissionForm benchmarkId={data.id} />
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
