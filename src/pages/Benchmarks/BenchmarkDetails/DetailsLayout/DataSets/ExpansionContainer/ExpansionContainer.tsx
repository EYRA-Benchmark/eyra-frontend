import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as React from "react";
import VerticalTabs from "../VerticalTabs/VerticalTabs";
import styles from "./ExpansionContainer.module.css";
interface IProps {
  testDataSets: any[];
  trainingDataSets: any[];
}
class ExpansionContainer extends React.Component<IProps, {}> {
  render() {
    const { testDataSets, trainingDataSets } = this.props;

    return (
      <React.Fragment>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Training Data Sets</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={styles.container}>
            <VerticalTabs dataSets={testDataSets} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Test Data Sets</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={styles.container}>
            <VerticalTabs dataSets={trainingDataSets} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </React.Fragment>
    );
  }
}
export default ExpansionContainer;
