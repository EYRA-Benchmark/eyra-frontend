import React from 'react';
import AlgorithmTableHead from './AlgorithmsTableHead';
import moment from 'moment';
import { sortBy } from 'lodash';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TablePagination,
  Fab,
} from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';
import { IAlgorithm } from 'src/types';

interface IProps {
  showMore: boolean;
  algorithms: IAlgorithm[];
  onEdit: (algorithm: IAlgorithm) => void;
}

// Functions for Sorting
type Order = 'asc' | 'desc';

const AlgorithmsTable = (props: IProps) => {
  const algorithms = props.algorithms;
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState('Name');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  function handleRequestSort(event: any, property: string) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }
  function handleChangePage(event: any, newPage: number) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event: any) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }
  const { showMore } = props;

  let sortedData = sortBy(algorithms, orderBy);
  if (order === 'desc') {
    sortedData = sortedData.reverse();
  }
  return (
    <Paper>
      <div>
        <Table aria-labelledby="tableTitle">
          <AlgorithmTableHead
            order={order as Order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((algorithm) => (
                <TableRow hover={true} tabIndex={-1} key={algorithm.id}>
                  <TableCell component="td" scope="row">
                    {moment(algorithm.created).format('DD-MM-YYYY')}
                  </TableCell>
                  <TableCell component="td" scope="row">
                    {algorithm.name}
                  </TableCell>
                  <TableCell component="td" scope="row">
                    <Fab size="small" onClick={() => props.onEdit(algorithm)}>
                      <EditIcon color="primary" />
                    </Fab>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      {showMore ?
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={algorithms.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        /> : null
      }
    </Paper>
  );
};

// const wrapper = withStyles(styles);
export default AlgorithmsTable;
