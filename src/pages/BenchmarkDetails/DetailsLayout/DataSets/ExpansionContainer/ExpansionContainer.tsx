import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import * as React from 'react';
import VerticalTabs from '../VerticalTabs/VerticalTabs';
import styles from './ExpansionContainer.module.css';
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
            <VerticalTabs dataSets={trainingDataSets} isTestData={false} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Test Data Sets</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={styles.container}>
            <VerticalTabs dataSets={testDataSets} isTestData={true} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </React.Fragment>
    );
  }
}
export default ExpansionContainer;
