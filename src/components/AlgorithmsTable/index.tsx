import * as React from 'react';
import moment from 'moment';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from '@material-ui/core';
import { IAlgorithm } from 'src/types';

interface IProps {
  algorithms: IAlgorithm[];
}

const AlgorithmsTable = (props: IProps) => {
  const data = props.algorithms;
  const sortedData = data;

  const tableHeaders = [
    'Created',
    'Name',
  ];

  return (
    <Paper>
      <div>
        <Table aria-labelledby="tableTitle">
          <TableHead>
            <TableRow>
              { tableHeaders.map((header) => (
                <TableCell key={header}>{header}</TableCell>
              )) }
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((n, i: number) => (
              <TableRow hover={true} tabIndex={-1} key={i}>
                <TableCell component="td" scope="row">
                  {moment(n.created).format('DD-MM-YYYY')}
                </TableCell>
                <TableCell component="td" scope="row">
                  {n.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
};

// const wrapper = withStyles(styles);
export default AlgorithmsTable;
