// import { Icon } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import styles from "./VerticalTabs.module.css";
import { comicApi } from '../../../../../../services/comicApi';
import { IDataFile } from '../../../../../../types/data_file';

interface IState {
  value: number;
  data: IDataFile | null;
  groundTruth: IDataFile | null;
}
interface IProps {
  // todo: add proper type
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
      className={styles.tabsContainer}
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
    data: null,
    groundTruth: null,
  };
  handleChange = (event: any, value: number) => {
    this.setState({ value });
  };

  async componentDidMount() {
    const { dataSets } = this.props;
    this.setState({
      data: await comicApi.data_file(dataSets[0].data),
      groundTruth: await comicApi.data_file(dataSets[0].ground_truth),
    })
  }

  render() {
    const { value, data, groundTruth } = this.state;
    if (!data || !groundTruth) { return null; }

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
                  labelContainer: styles.label,
                  wrapper: styles.borderBottom
                }}
                key={d.id}
                style={{ flexDirection: "row" }}
              />
            ))}
          </Tabs>
        </Grid>
        <Grid item={true} xs={10} sm={10} md={10} className={styles.divider}>
          <div className={styles.borderBottom}>
            <h5>Description</h5>
          </div>
          {desc.map(
            (d: any, i: number) =>
              value === i && (
                <TabContainer>
                  <p className={styles.noMargin}>
                    <span>Name: </span>
                    <span> {d.name}</span>
                  </p>
                  <p>
                    <span>Description: </span>
                    <span> {d.description}</span>
                  </p>
                  <p>
                    <span>Created: </span>
                    <span> {d.created}</span>
                  </p>
                  <a href={d.file} download={true}>
                    Download
                  </a>
                </TabContainer>
              )
          )}
        </Grid>
      </Grid>
    );
  }
}

export default VerticalTabs;
