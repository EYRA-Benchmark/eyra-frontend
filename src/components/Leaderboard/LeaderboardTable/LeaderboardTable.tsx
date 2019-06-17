import * as React from 'react';

import {
  Button,
  Icon,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import { formatDateTime } from 'src/utils';
import { UUID4 } from 'src/types';
import { INestedSubmission } from '../index';

import LeaderboardHead from '../LeaderboardHead/LeaderboardHead';

import styles from './LeaderboardTableStyle';
import JobLogDialog from 'src/components/JobLogDialog';

// https://material-ui.com/components/tables/#EnhancedTable.tsx
function desc<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort<T>(array: T[], cmp: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

type Order = 'asc' | 'desc';

function getSorting<K extends keyof any>(
  order: Order,
  orderBy: K,
): (a: { [key in K]: number | string }, b: { [key in K]: number | string }) => number {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

interface IState {
  order: Order;
  orderBy: string;
  openJobLogID: UUID4 | null;
}
interface IProps extends WithStyles<typeof styles> {
  classes: any;
  submissions: INestedSubmission[];
}

type IDataRow = {
  name: string,
  version: string,
  date: string,
  implementation_job: UUID4,
} & {[label: string]: number};

class LeaderboardTable extends React.Component<IProps, IState> {
  state = {
    order: 'asc' as Order,
    orderBy: 'score',
    openJobLogID: null,
  };

  handleRequestSort = (event: any, property: any) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order: order as Order, orderBy });
  }

  render() {
    const { classes } = this.props;
    const { order, orderBy, openJobLogID } = this.state;

    const metricFields = Object.keys(JSON.parse(this.props.submissions[0].metrics_json).metrics);

    const data: IDataRow[] = this.props.submissions.map((submission) => {
      // const metricsJson = JSON.parse(submission.metrics_json.replace(/\bNaN\b/g, 'null'));
      const metrics = JSON.parse(submission.metrics_json).metrics;

      return {
        name: submission.implementation.name,
        version: submission.implementation.version,
        implementationJob : submission.implementation_job,
        date: submission.created,
        ...metrics,
      };
    });

    const sortedData = stableSort(data, getSorting(order, orderBy));

    return (
      <Paper className={classes.root}>
        { openJobLogID && (
          <JobLogDialog jobID={openJobLogID!} onClose={() => this.setState({ openJobLogID: null })} />
        )}
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <LeaderboardHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
              metricFields={metricFields}
            />
            <TableBody>
              {sortedData.map(
                (n: IDataRow, i: number) => {
                  return (
                    <TableRow hover={true} tabIndex={-1} key={i}>
                      <TableCell component="td" scope="row">
                        {n.name}
                      </TableCell>
                      <TableCell component="td" scope="row" align="left">
                        {n.version}
                      </TableCell>
                      {metricFields.map((fieldName, j: number) => (
                        <TableCell key={j} align="left">
                          {n[fieldName]}
                        </TableCell>
                      ))}
                      <TableCell align="left">{
                        <a href="https://observablehq.com/@maartenvm/frb-detection-evaluation/3" target="_blank">
                          visualization
                        </a>
                      }</TableCell>
                      <TableCell align="left">{formatDateTime(new Date(n.date))}</TableCell>
                      <TableCell align="left">
                        <Button
                          variant="outlined"
                          color="primary"
                          type="button"
                          onClick={() => this.setState({ openJobLogID: n.implementationJob })}
                        >
                          <Icon>wrap_text</Icon> Log
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                },
              )}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(LeaderboardTable);
