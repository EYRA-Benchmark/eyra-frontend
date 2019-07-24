import * as React from 'react';
import LeadeboardToolbar from '../LeaderboardToolbar/';
import {
  Checkbox,
  Fab,
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
import Observable from 'src/components/Observables';
import CompareDialog from '../CompareDialog';

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
  observableUrl: string;
  selected: string[];
  itemsToCompare: INestedSubmission[];
}
interface IProps extends WithStyles<typeof styles> {
  classes: any;
  submissions: INestedSubmission[];
}

type IDataRow = {
  id: string,
  name: string,
  version: string,
  date: string,
  implementation_job: UUID4,
} & { [label: string]: number };

class LeaderboardTable extends React.Component<IProps, IState> {
  state = {
    order: 'asc' as Order,
    orderBy: 'score',
    openJobLogID: null,
    observableUrl: '',
    selected: [],
    itemsToCompare: [],
  };

  handleRequestSort = (event: any, property: any) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order: order as Order, orderBy });
  }
  // compareItems = () => {
  //   if (this.state.itemsToCompare.length === 2) {
  //     this.setState({ showComparision: true });
  //   }
  // }
  render() {
    const { classes } = this.props;
    const { order, orderBy, openJobLogID, observableUrl, selected, itemsToCompare } = this.state;
    const metrics = this.props.submissions[0].metrics;
    let metricFields: string[];
    metrics ? metricFields = Object.keys(metrics) : metricFields = [];

    const data: IDataRow[] = this.props.submissions.map((submission) => {
      const metric = submission.metrics;
      const url = submission.visualization_url + '?id=' + submission.evaluation_job;
      return {
        id: submission.id,
        name: submission.implementation.name,
        version: submission.implementation.version,
        implementationJob: submission.implementation_job,
        visualization: url,
        date: submission.created,
        ...metric,
      };
    });

    const sortedData = stableSort(data, getSorting(order, orderBy));
    const isSelected = (id: string) => selected.indexOf(id) !== -1;

    const handleClick = (event: React.ChangeEvent<unknown>, checked: boolean, id: string) => {
      if (checked && this.state.selected.length === 2) {
        alert('You can select maximum two algorithms to compare');
        return;
      }
      const selectedIndex = selected.indexOf(id);
      let newSelected: string[] = [];
      let itemsToCompare: INestedSubmission[] = [];
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
      this.props.submissions.filter((submission) => {
        const index = newSelected.indexOf(submission.id);
        if (index >= 0) { itemsToCompare.push(submission); }
      })
      this.setState({
        itemsToCompare,
        selected: newSelected,
      });
    };
    return (
      <Paper className={classes.root}>
        {openJobLogID && (
          <JobLogDialog
            jobID={openJobLogID!}
            onClose={() => this.setState({ openJobLogID: null })}
          />
        )}
        {observableUrl !== '' && (
          <Observable url={observableUrl} onClose={() => this.setState({ observableUrl: '' })} />
        )}
        {itemsToCompare.length === 2 && (
          <CompareDialog
            items={itemsToCompare}
            onClose={() => this.setState({ itemsToCompare: [] })}
          />
        )
        }
        <div className={classes.tableWrapper}>
          <LeadeboardToolbar numSelected={selected.length} />
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
                  const isItemSelected = isSelected(n.id);
                  const labelId = `table-checkbox-${i}`;
                  return (
                    <TableRow
                      hover={true}
                      tabIndex={-1}
                      key={i}
                      aria-checked={isItemSelected}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color='primary'
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                          onChange={(event, checked) => handleClick(event, checked, n.id)}
                        />
                      </TableCell>
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
                        // <a href={n.visualization.toString()} target="_blank">
                        //   visualization
                        // </a>
                        <button onClick={() => this.setState({ observableUrl: n.visualization.toString() })}>
                          visualize
                          </button>
                      }</TableCell>
                      <TableCell align="left">{formatDateTime(new Date(n.date))}</TableCell>
                      <TableCell align="left">
                        <Fab
                          title="Log"
                          variant="round"
                          size="small"
                          onClick={() => this.setState({ openJobLogID: n.implementationJob })}>
                          {/* <Button
                          variant="outlined"
                          color="primary"
                          type="button"
                          onClick={() => this.setState({ openJobLogID: n.implementationJob })}
                        > */}
                          <Icon color="primary">wrap_text</Icon>
                        </Fab>
                        {/* </Button> */}
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
