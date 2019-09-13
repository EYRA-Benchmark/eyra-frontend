import React from 'react';
import {
  Paper,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Container,
} from '@material-ui/core';
import ExpansionContainer from 'src/components/BenchmarkDetailsLayout/DataSets/ExpansionContainer';
import styles from './DatasetDetails.css';
import { ItemsList } from 'src/components/DataSetItemsList';
export default class DatasetDetails extends React.Component {
  state = {
    testDatasets: [
      {
        data: 'df4f89ce-9350-4a23-b513-8215786a7ccb',
        ground_truth: '5fb95faf-2d20-421c-853a-9dc4d32896db',
      },
    ],
    trainingDatasets: [],
  };
  render() {
    return (
      <Container>
        <Paper>
          <div className={styles.container}>
            <Typography variant="h5">Data Set Title</Typography>
            <Typography paragraph={true}>
              Filterbank format: Standard radio astronomical data format,
              consisting of a real frequency/time intensity array. Data should be
              8bit with correct header information. Filterbank files will have a
              simulated Gaussian noise background (mean 100, standard deviation 5)
              and FRBs will be injected at random locations with widths, fluences,
              spectral index, and dispersion measures (DM) drawn from broad
              distributions.
          </Typography>
            <Typography component="div" className={styles.tableContainer}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>File Name</TableCell>
                    <TableCell>Format</TableCell>
                    <TableCell>File Size</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>FRB Data</TableCell>
                    <TableCell>.txt</TableCell>
                    <TableCell>3 KB</TableCell>
                    <TableCell>
                      A corresponding .txt file will contain the parameters of
                      each injected FRB, including at least arrival_time, DM,
                      pulse_width, spectral_index, S/N. This will be used as the
                      “truth” file.
                  </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Typography>
            <Typography variant="h5">Derived Datasets</Typography>
            <ExpansionContainer
              trainingDataSets={this.state.trainingDatasets}
              testDataSets={this.state.testDatasets}
            />
            <Typography variant="h5">Benchmarks</Typography>
            <ItemsList />
          </div>
        </Paper>
      </Container>
    );
  }
}
