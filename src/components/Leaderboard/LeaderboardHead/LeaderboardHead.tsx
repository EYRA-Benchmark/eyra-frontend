import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from '@material-ui/core';
import * as React from 'react';
interface IProps {
  onRequestSort: (event: any, property: any) => void;
  order: any;
  orderBy: string;
  rowCount: number;
  metricFields: string[];
  isPrivate: boolean;
}

class Leaderboard extends React.Component<IProps, {}> {
  createSortHandler = (property: any) => (event: any) => {
    this.props.onRequestSort(event, property);
  }
  render() {

    const publicRows = [
      {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Name',
      },
      {
        id: 'version',
        numeric: false,
        disablePadding: false,
        label: 'Version',
      },
      ...this.props.metricFields.map((fieldName) => ({
        id: fieldName,
        numeric: true,
        disablePadding: false,
        label: fieldName,
      })),
      { id: 'visualization', numeric: false, disablePadding: false, label: 'Visualization' },
      { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
      { id: 'log', numeric: false, disablePadding: false, label: 'Logs' },
    ];
    const privateRows = [
      {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Name',
      },
      {
        id: 'version',
        numeric: false,
        disablePadding: false,
        label: 'Version',
      },
      ...this.props.metricFields.map((fieldName) => ({
        id: fieldName,
        numeric: true,
        disablePadding: false,
        label: fieldName,
      })),
      { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
      { id: 'log', numeric: false, disablePadding: false, label: 'Logs' },
    ];
    let rows;
    { this.props.isPrivate ? rows = privateRows : rows = publicRows; }
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map((row) => {
            return (
              <TableCell
                key={row.id}
                align={'left'}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
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
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

export default Leaderboard;
