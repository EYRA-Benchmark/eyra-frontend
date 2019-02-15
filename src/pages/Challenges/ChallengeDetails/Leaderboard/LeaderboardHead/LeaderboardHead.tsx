import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from "@material-ui/core";
import * as React from "react";
interface IProps {
  onRequestSort: (event: any, property: any) => void;
  order: any;
  orderBy: string;
  rowCount: number;
}

const rows = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name"
  },
  { id: "score", numeric: true, disablePadding: false, label: "Score" },
  { id: "date", numeric: true, disablePadding: false, label: "Date" }
];
class Leaderboard extends React.Component<IProps, {}> {
  createSortHandler = (property: any) => (event: any) => {
    this.props.onRequestSort(event, property);
  };
  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(row => {
            return (
              <TableCell
                key={row.id}
                align={row.numeric ? "right" : "left"}
                padding={row.disablePadding ? "none" : "default"}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? "bottom-end" : "bottom-start"}
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
