import React from 'react';
import AlgorithmTableHead from './AlgorithmsTableHead';
import moment from 'moment';
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

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) { return order; }
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const AlgorithmsTable = (props: IProps) => {
  const data = props.algorithms;
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('Name');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }
  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }
  const { showMore } = props;
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
            {stableSort(data, getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((n, i) => (
                <TableRow hover={true} tabIndex={-1} key={i}>
                  <TableCell component="td" scope="row">
                    {moment(n.created).format('DD-MM-YYYY')}
                  </TableCell>
                  <TableCell component="td" scope="row">
                    {n.name}
                  </TableCell>
                  <TableCell component="td" scope="row">
                    <Fab size="small" onClick={() => props.onEdit(data[i])}>
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
          count={data.length}
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
