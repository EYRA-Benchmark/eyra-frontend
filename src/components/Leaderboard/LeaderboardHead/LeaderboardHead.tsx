import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Checkbox,
} from '@material-ui/core';
import * as React from 'react';
interface IProps {
  onRequestSort: (event: any, property: any) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  order: any;
  orderBy: string;
  rowCount: number;
  metricFields: string[];
  numSelected: number;
}

class Leaderboard extends React.Component<IProps, {}> {
  createSortHandler = (property: any) => (event: any) => {
    this.props.onRequestSort(event, property);
  }
  render() {
    const rows = [

      {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Name',
        sortable: true,
      },
      {
        id: 'version',
        numeric: false,
        disablePadding: false,
        label: 'Version',
        sortable: true,
      },
      ...this.props.metricFields.map((fieldName) => ({
        id: fieldName,
        numeric: true,
        disablePadding: false,
        label: fieldName,
        sortable: true,
      })),
      { id: 'visualization', numeric: false, disablePadding: false, label: 'Visualization', sortable: false },
      { id: 'date', numeric: false, disablePadding: false, label: 'Date', sortable: true },
      { id: 'log', numeric: false, disablePadding: false, label: 'Logs', sortable: false },
    ];

    const { order, orderBy,
      onSelectAllClick,
      numSelected,
      rowCount,
    }
      = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'Select all desserts' }}
              color="primary"
            />
          </TableCell>
          {rows.map((row) => {
            return (
              <TableCell
                key={row.id}
                align={'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                {row.sortable ?
                  (<Tooltip
                    title="Sort"
                    placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                    enterDelay={300}
                  >
                    <TableSortLabel
                      active={orderBy === row.id}
                      direction={order}
                      onClick={this.createSortHandler(row.id)}
                    >
                      {row.label}
                    </TableSortLabel>
                  </Tooltip>) : row.label
                }
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

export default Leaderboard;
