import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import Markdown from "@nteract/markdown";
import PropTypes from "prop-types";
import * as React from "react";
import { description } from "../../../../data/description";
import Datasets from "./DataSets/DataSets";
import styles from "./DetailsLayout.module.css";
import Leadeboard from "./Leaderboard/Leaderboard";
interface IProps {
  children: React.ReactNode;
}
function TabContainer(props: IProps) {
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
class Details extends React.Component<{}, IState> {
  state = {
    value: 0
  };
  handleChange = (event: any, value: number) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <Grid container={true} spacing={24}>
        {/* <Grid container={true} item={true} xs={12} className={styles.banner}> */}
        {/* <Grid item={true} xs={12} sm={4} md={3}>
            <Paper className={styles.paper}>Image</Paper>
          </Grid> */}
        <Grid item={true} xs={12} sm={12} md={12}>
          <Paper className={styles.paper}>
            <h2>EYRA Benchmark Demo Tissue Segmentation 2019</h2>
            <p>
              This benchmark is set up for illustrative purposes, with the aim
              to provide an example of an insight challenge and show that
              additional analyses can be done beyond the leaderboard.
            </p>
          </Paper>
          {/* </Grid> */}
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
            </Tabs>
            {value === 0 && (
              <TabContainer>
                <Markdown source={description} className={styles.container} />
              </TabContainer>
            )}
            {value === 1 && (
              <TabContainer>
                <Leadeboard />
              </TabContainer>
            )}
            {value === 2 && (
              <TabContainer>
                <Datasets />
              </TabContainer>
            )}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
export default Details;
