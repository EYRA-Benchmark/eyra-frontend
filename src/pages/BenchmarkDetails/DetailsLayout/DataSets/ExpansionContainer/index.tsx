import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import * as React from 'react';
import VerticalTabs from '../VerticalTabs';
import styles from './ExpansionContainer.css';
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
            {trainingDataSets.length > 0 ? (
              <VerticalTabs dataSets={trainingDataSets} isTestData={false} />
            ) : (
                <p>Training data is not available</p>
              )}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Test Data Sets</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={styles.container}>
            {testDataSets.length > 0 ? (
              <VerticalTabs dataSets={testDataSets} isTestData={true} />
            ) : (
                <p>Test data is not available</p>
              )}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </React.Fragment>
    );
  }
}
export default ExpansionContainer;
