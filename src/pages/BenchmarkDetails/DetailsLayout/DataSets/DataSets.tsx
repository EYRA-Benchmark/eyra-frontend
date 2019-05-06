import * as React from 'react';
import ExpansionContainer from './ExpansionContainer';
import { Typography } from '@material-ui/core';
import { Link } from 'src/routes';
interface IProps {
  testDataSets: any[];
  trainingDataSets: any[];
}

class DataSets extends React.Component<IProps, {}> {
  render() {
    const { testDataSets, trainingDataSets } = this.props;
    return (
      <React.Fragment>
        <Typography paragraph={true}>
          Filterbank format: Standard radio astronomical data format, consisting
          of a real frequency/time intensity array. Data should be 8bit with
          correct header information. Filterbank files will have a simulated
          Gaussian noise background (mean 100, standard deviation 5) and FRBs
          will be injected at random locations with widths, fluences, spectral
          index, and dispersion measures (DM) drawn from broad distributions.{' '}
          <Link route="datasets"><a>More...</a></Link>
        </Typography>

        <ExpansionContainer
          testDataSets={testDataSets}
          trainingDataSets={trainingDataSets}
        />
      </React.Fragment>
    );
  }
}
export default DataSets;
