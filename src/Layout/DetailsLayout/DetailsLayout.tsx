import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import Leadeboard from "../../pages/Challenges/ChallengeDetails/Leaderboard/Leaderboard";
import styles from "./DetailsLayout.module.css";
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
        <Grid container={true} item={true} xs={12} className={styles.banner}>
          <Grid item={true} xs={12} sm={4} md={3}>
            <Paper className={styles.paper}>Image</Paper>
          </Grid>
          <Grid item={true} xs={12} sm={8} md={9}>
            <Paper className={styles.paper}>Desc</Paper>
          </Grid>
        </Grid>
        <Grid item={true} xs={12}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Overview" />
            <Tab label="Leadeboard" />
            <Tab label="DataSets" />
          </Tabs>
          {value === 0 && <TabContainer>Overview</TabContainer>}
          {value === 1 && (
            <TabContainer>
              <Leadeboard />
            </TabContainer>
          )}
          {value === 2 && <TabContainer>Datasets</TabContainer>}
        </Grid>
      </Grid>
    );
  }
}
export default Details;
