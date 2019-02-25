import { Icon } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import DownloadIcon from "@material-ui/icons/CloudDownload";
import PropTypes from "prop-types";
import * as React from "react";
import styles from "./VerticalTabs.module.css";
interface IState {
  value: number;
}
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
class VerticalTabs extends React.Component<{}, IState> {
  state = {
    value: 0
  };
  handleChange = (event: any, value: number) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    return (
      <Grid container={true} spacing={24} className={styles.noMargin}>
        <Grid item={true} xs={2} sm={2} md={2} className={styles.divider}>
          <div className={styles.borderBottom}>
            <h5>Data Sources</h5>
          </div>
          <Tabs
            value={value}
            onChange={this.handleChange}
            textColor="primary"
            classes={{
              indicator: styles.hide,
              flexContainer: styles.tabsContainer
            }}
          >
            <Tab
              label="x_train.npy"
              classes={{
                labelContainer: styles.label
              }}
            />

            <Tab
              label="gt_train.npy"
              classes={{
                labelContainer: styles.label
              }}
            />
          </Tabs>
        </Grid>
        <Grid item={true} xs={9} sm={9} md={9} className={styles.divider}>
          <div className={styles.borderBottom}>
            <h5>Description</h5>
          </div>
          {value === 0 && (
            <TabContainer>
              <Icon title="download file">
                <DownloadIcon />
              </Icon>
            </TabContainer>
          )}
          {value === 1 && <TabContainer>second</TabContainer>}
          {value === 2 && <TabContainer>Third</TabContainer>}
        </Grid>
      </Grid>
    );
  }
}

export default VerticalTabs;
