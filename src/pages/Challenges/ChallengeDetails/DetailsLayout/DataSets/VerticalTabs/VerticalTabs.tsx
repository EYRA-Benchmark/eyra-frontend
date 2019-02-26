import { Icon } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import DownloadIcon from "@material-ui/icons/CloudDownload";
import { AxiosResponse } from "axios";
import PropTypes from "prop-types";
import * as React from "react";
import axios from "../../../../../../services/SetUpAxios";
import styles from "./VerticalTabs.module.css";

interface IState {
  value: number;
  data: object;
  groundTruth: object;
}
interface IProps {
  dataSets: any[];
}
interface IContainerProps {
  children: React.ReactNode;
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
class VerticalTabs extends React.Component<IProps, IState> {
  state = {
    value: 0,
    data: {},
    groundTruth: {}
  };
  handleChange = (event: any, value: number) => {
    this.setState({ value });
  };
  componentDidMount() {
    const { dataSets } = this.props;

    axios
      .get("data_files/" + dataSets[0].data)
      .then((response: AxiosResponse) => {
        this.setState({
          data: response.data
        });
      });
    axios
      .get("data_files/" + dataSets[0].ground_truth)
      .then((response: AxiosResponse) => {
        this.setState({
          data: response.data
        });
      });
  }
  render() {
    const { value, data, groundTruth } = this.state;
    const desc: any[] = [];

    if (Object.keys(data) && Object.keys(groundTruth)) {
      desc.push(data);
      desc.push(groundTruth);
    }
    console.log("tabs", desc);
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
            {desc.map((d: any, id: number) => (
              <Tab
                label={d.name ? d.name : ""}
                classes={{
                  labelContainer: styles.label
                }}
                key={d.id}
              />
            ))}
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
