import * as React from 'react';
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
  WithStyles
} from '@material-ui/core';
import VisualizationIcon from '@material-ui/icons/BarChart';
import { formatDateTime } from 'src/utils';
import { sortBy } from 'lodash';
import { UUID4, IAlgorithm } from 'src/types';
import { INestedSubmission } from '../index';

import LeaderboardHead from '../LeaderboardHead/LeaderboardHead';
import LeadeboardToolbar from '../LeaderboardToolbar/';
import JobLogDialog from 'src/components/JobLogDialog';
import Observable from 'src/components/Observables';
import CompareDialog from '../CompareDialog';
import AlgorithmSubmissionDetails from '../../Forms/Algorithm/AlgorithmSubmissionDetails';
import VisualizationDialog from '../../Dialog/';
import styles from './LeaderboardTableStyle';
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
  algorithmDetails: IAlgorithm | null;
}
interface IProps extends WithStyles<typeof styles> {
  classes: any;
  submissions: INestedSubmission[];
}

type IDataRow = {
  id: string;
  name: string;
  version: string;
  date: string;
  algorithm_job: UUID4; //implementation_job
  evaluation_job: UUID4;
  algorithm: IAlgorithm;
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
    algorithmDetails: null
  };

  handleRequestSort = (event: any, property: any) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order: order as Order, orderBy });
  };
  render() {
    const { classes } = this.props;
    const {
      order,
      orderBy,
      openJobLogID,
      selected,
      itemsToCompare,
      showComparision,
      rowsPerPage,
      page,
      observableJobId,
      observableUrl,
      algorithmDetails
    } = this.state;
    const metrics = this.props.submissions[0].metrics;
    let metricFields: string[];
    metrics ? (metricFields = Object.keys(metrics)) : (metricFields = []);

    const data: IDataRow[] = this.props.submissions.map(submission => {
      const metric = submission.metrics;
      const url =
        submission.visualization_url &&
        submission.visualization_url + '?id=' + submission.evaluation_job;
      return {
        id: submission.id,
        name: submission.algorithm.name,
        version: submission.version,
        implementationJob: submission.algorithm_job,
        visualization: url,
        evaluationJob: submission.evaluation_job,
        date: submission.created,
        algorithm: submission.algorithm,
        ...metric
      };
    });

    let sortedData = sortBy(data, orderBy);
    if (order === 'desc') {
      sortedData = sortedData.reverse();
    }

    const isSelected = (id: string) => selected.indexOf(id) !== -1;
    const handleSelectAllClick = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      if (event.target.checked) {
        const newSelecteds = data.map(n => n.id);
        this.setState({
          selected: newSelecteds,
          itemsToCompare: this.props.submissions
        });
        return;
      }
      this.setState({ selected: [], itemsToCompare: [] });
    };
    const handleChangePage = (event: unknown, newPage: number) => {
      this.setState({ page: newPage });
    };

    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      this.setState({ rowsPerPage: +event.target.value });
      this.setState({ page: 0 });
    };
    const handleClick = (
      event: React.ChangeEvent<unknown>,
      checked: boolean,
      id: string
    ) => {
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
          selected.slice(selectedIndex + 1)
        );
      }
      this.props.submissions.filter(submission => {
        const index = newSelected.indexOf(submission.id);
        if (index >= 0) {
          compareItems.push(submission);
        }
      });
      this.setState({
        itemsToCompare: compareItems,
        selected: newSelected
      });
    };
    let isLoggedIn = localStorage.getItem('comicToken') ? true : false;
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
            onClose={() =>
              this.setState({ observableJobId: null, observableUrl: '' })
            }
            title={'Visualization'}
          >
            <Observable
              jobId={observableJobId}
              observableUrl={observableUrl}
              isNotebook={true}
            />
          </VisualizationDialog>
        )}
        {showComparision && (
          <VisualizationDialog
            print={true}
            onClose={() =>
              this.setState({ showComparision: false, selected: [] })
            }
            title={'Compare Visualization'}
          >
            <CompareDialog items={itemsToCompare} />
          </VisualizationDialog>
        )}
        {algorithmDetails && (
          <VisualizationDialog
            maxWidth={'md'}
            print={false}
            onClose={() => this.setState({ algorithmDetails: null })}
            title={'Submission'}
          >
            <AlgorithmSubmissionDetails algorithm={algorithmDetails} />
          </VisualizationDialog>
        )}
        <div className={classes.tableWrapper}>
          <LeadeboardToolbar
            numSelected={selected.length}
            compareItems={() => {
              this.setState({ showComparision: true });
            }}
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
              {sortedData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((n: IDataRow, i: number) => {
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
                          onChange={(event, checked) =>
                            handleClick(event, checked, n.id)
                          }
                        />
                      </TableCell>
                      <TableCell component="td" scope="row">
                        <a
                          onClick={() =>
                            this.setState({ algorithmDetails: n.algorithm })
                          }
                        >
                          {n.name}
                        </a>
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
                        {n.evaluationJob !== 'null' &&
                        n.visualization !== null ? (
                          <Fab
                            variant="extended"
                            size="small"
                            aria-label="add"
                            color="secondary"
                            onClick={() => {
                              this.setState({
                                observableUrl: n.visualization.toString(),
                                observableJobId: n.evaluationJob
                              });
                            }}
                          >
                            <VisualizationIcon color="primary" />
                            visualize
                          </Fab>
                        ) : (
                          '-'
                        )}
                      </TableCell>
                      <TableCell align="left">
                        {formatDateTime(new Date(n.date))}
                      </TableCell>
                      <TableCell align="left">
                        <Fab
                          disabled={!isLoggedIn}
                          title="Log"
                          variant="round"
                          size="small"
                          color="secondary"
                          onClick={() =>
                            this.setState({ openJobLogID: n.implementationJob })
                          }
                        >
                          <Icon color="primary">wrap_text</Icon>
                        </Fab>
                        {/* </Button> */}
                      </TableCell>
                    </TableRow>
                  );
                })}
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
            'aria-label': 'previous page'
          }}
          nextIconButtonProps={{
            'aria-label': 'next page'
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(LeaderboardTable);
