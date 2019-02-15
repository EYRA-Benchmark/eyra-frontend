import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  withStyles,
  WithStyles
} from "@material-ui/core";
import * as React from "react";
import LeaderboardHead from "../LeaderboardHead/LeaderboardHead";
import styles from "./LeaderboardTableStyle";

function desc(a: any, b: any, orderBy: any) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function stableSort(array: any, cmp: any) {
  const stabilizedThis = array.map((el: any, index: any) => [el, index]);
  stabilizedThis.sort((a: any, b: any) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el: any) => el[0]);
}

function getSorting(order: any, orderBy: any) {
  return order === "desc"
    ? (a: any, b: any) => desc(a, b, orderBy)
    : (a: any, b: any) => -desc(a, b, orderBy);
}

interface IState {
  order: any;
  orderBy: string;
}
interface IProps extends WithStyles<typeof styles> {
  classes: any;
}
class LeaderboardTable extends React.Component<IProps, IState> {
  state = {
    order: "asc",
    orderBy: "score"
  };

  handleRequestSort = (event: any, property: any) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  render() {
    const { classes } = this.props;
    const { order, orderBy } = this.state;
    const data = [
      { id: 1, name: "ABC", score: 100, date: "2018-05-21" },
      { id: 2, name: "XYZ", score: 200, date: "2019-06-05" },
      { id: 3, name: "GHT", score: 50, date: "2018-05-05" }
    ];
    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <LeaderboardHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy)).map((n: any) => {
                return (
                  <TableRow hover={true} tabIndex={-1} key={n.id}>
                    <TableCell component="th" scope="row">
                      {n.name}
                    </TableCell>
                    <TableCell align="right">{n.score}</TableCell>
                    <TableCell align="right">{n.date}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(LeaderboardTable);
