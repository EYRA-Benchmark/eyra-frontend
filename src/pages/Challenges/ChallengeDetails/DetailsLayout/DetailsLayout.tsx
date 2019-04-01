import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import Markdown from "@nteract/markdown";
import PropTypes from "prop-types";
import * as React from "react";
import AlgorithmSubmissionForm from "../../../../components/Forms/Algorithm/AlgorithmSubmission";
import Datasets from "./DataSets/DataSets";
import styles from "./DetailsLayout.module.css";
import Leaderboard from "./Leaderboard/Leaderboard";

import { IBenchmark } from '../../../../types/benchmark';

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
TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};
interface IState {
  value: number;
}
class Details extends React.Component<IProps, IState> {
  state = {
    value: 0
  };
  handleChange = (event: any, value: number) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { data } = this.props;
    if (data) {
      /* Get the test and training data sets */
      const testDataSets = [
        {
          data: data.test_data_file,
          ground_truth: data.test_ground_truth_data_file
        }
      ];
      const trainingDataSets = [
        {
          data: data.training_data_file,
          ground_truth: data.training_ground_truth_data_file
        }
      ];
      return (
        <Grid container={true} spacing={24}>
          <Grid item={true} xs={12} sm={12} md={12}>
            <Paper className={styles.paper}>
              <h2>{data.name}</h2>
              <p>
                <Markdown
                  source={data.short_description}
                  className={styles.container}
                />
              </p>
            </Paper>
          </Grid>
          <Grid item={true} xs={12}>
            <Paper>
              <Tabs
                value={value}
                onChange={this.handleChange}
                indicatorColor="primary"
                className={styles.tabsContainer}
              >
                <Tab label="Overview" />
                <Tab label="Leaderboard" />
                <Tab label="DataSets" />
                <Tab label="Submit" />
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
                  <Leaderboard benchmarkID={data.id} />
                </TabContainer>
              )}
              {value === 2 && (
                <TabContainer>
                  <Datasets
                    testDataSets={testDataSets}
                    trainingDataSets={trainingDataSets}
                  />
                </TabContainer>
              )}
              {value === 3 && (
                <TabContainer>
                  <AlgorithmSubmissionForm benchmarkId={data.id} />
                </TabContainer>
              )}
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
