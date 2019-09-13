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
  TablePagination,
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
import VisualizationDialog from '../../Dialog/';
import { sortBy } from 'lodash';

type Order = 'asc' | 'desc';

interface IState {
  order: Order;
  orderBy: string;
  openJobLogID: UUID4 | null;
  observableUrl: string;
  observableJobId: UUID4 | null;
  selected: string[];
  itemsToCompare: INestedSubmission[];
  showComparision: boolean;
  rowsPerPage: number;
  page: number;
  open: boolean;
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
  evaluation_job: UUID4,
} & { [label: string]: string };

class LeaderboardTable extends React.Component<IProps, IState> {
  state: IState = {
    order: 'asc' as Order,
    orderBy: 'score',
    openJobLogID: null,
    observableUrl: '',
    observableJobId: null,
    selected: [],
    itemsToCompare: [],
    showComparision: false,
    rowsPerPage: 5,
    page: 0,
    open: false,
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
    const {
      order, orderBy, openJobLogID,
      selected, itemsToCompare, showComparision,
      rowsPerPage, page, observableJobId, observableUrl } = this.state;
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
        evaluationJob: submission.evaluation_job,
        date: submission.created,
        ...metric,
      };
    });

    let sortedData = sortBy(data, order);
    if (orderBy === 'desc') {
      sortedData = sortedData.reverse();
    }

    const isSelected = (id: string) => selected.indexOf(id) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        const newSelecteds = data.map((n) => n.id);
        this.setState({ selected: newSelecteds, itemsToCompare: this.props.submissions });
        return;
      }
      this.setState({ selected: [], itemsToCompare: [] });
    };
    const handleChangePage = (event: unknown, newPage: number) => {
      this.setState({ page: newPage });
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ rowsPerPage: +event.target.value });
      this.setState({ page: 0 });
    };
    const handleClick = (event: React.ChangeEvent<unknown>, checked: boolean, id: string) => {
      const selectedIndex = selected.indexOf(id);
      let newSelected: string[] = [];
      const compareItems: INestedSubmission[] = [];
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
        if (index >= 0) { compareItems.push(submission); }
      });
      this.setState({
        itemsToCompare: compareItems,
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
        {observableJobId && (
          <VisualizationDialog
            print={false}
            onClose={() => this.setState({ observableJobId: null, observableUrl: '' })}
            title={'Visualization'}
          >
            <Observable jobId={observableJobId} observableUrl={observableUrl} isNotebook={true} />
          </VisualizationDialog>
        )}
        {showComparision && (
          <VisualizationDialog
            print={true}
            onClose={() => this.setState({ showComparision: false, selected: [] })}
            title={'Compare Visualization'}
          >
            <CompareDialog
              items={itemsToCompare}
            />
          </VisualizationDialog>
        )
        }
        <div className={classes.tableWrapper}>
          <LeadeboardToolbar
            numSelected={selected.length}
            compareItems={
              () => { this.setState({ showComparision: true }); }
            }
          />
          <Table className={classes.table} aria-labelledby="tableTitle">
            <LeaderboardHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
              metricFields={metricFields}
              onSelectAllClick={handleSelectAllClick}
              numSelected={selected.length}
            />
            <TableBody>
              {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(
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
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                          onChange={(event, checked) => handleClick(event, checked, n.id)}
                        />
                      </TableCell>
                      <TableCell component="td" scope="row">
                        {n.name}
                      </TableCell>
                      <TableCell component="td" scope="row" align="left">
                        {n.version ? n.version : '-'}
                      </TableCell>
                      {metricFields.map((fieldName, j: number) => (
                        <TableCell key={j} align="left">
                          {n[fieldName]}
                        </TableCell>
                      ))}
                      <TableCell align="left">
                        {
                          n.evaluationJob !== 'null' ?
                            //     (<a href={n.visualization.toString()} target="_blank">
                            //       visualization
                            // </a>)
                            (
                              <button
                                onClick={() => {
                                  this.setState({
                                    observableUrl: n.visualization.toString(),
                                    observableJobId: n.evaluationJob,
                                  });
                                }}
                              >
                                visualize
                              </button>
                            )
                            : '-'
                        }

                      </TableCell>
                      <TableCell align="left">{formatDateTime(new Date(n.date))}</TableCell>
                      <TableCell align="left">
                        <Fab
                          title="Log"
                          variant="round"
                          size="small"
                          color="secondary"
                          onClick={() => this.setState({ openJobLogID: n.implementationJob })}
                        >
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
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
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
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(LeaderboardTable);
