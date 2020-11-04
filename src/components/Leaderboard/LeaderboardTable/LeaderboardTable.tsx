import * as React from 'react';
import {
  Checkbox,
  Fab,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TablePagination,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import VisualizationIcon from '@material-ui/icons/BarChart';
import { formatDateTime } from 'src/utils';
import { sortBy } from 'lodash';
import { UUID4, IAlgorithm } from 'src/types';
import { INestedSubmission, INestedSubmissionWithAlgorithm } from '../index';

import LeaderboardHead from '../LeaderboardHead/LeaderboardHead';
import LeadeboardToolbar from '../LeaderboardToolbar/';
import Observable from 'src/components/Observables';
import CompareDialog from '../CompareDialog';
import AlgorithmSubmissionDetails from '../../Forms/Algorithm/AlgorithmSubmissionDetails';
import VisualizationDialog from '../../Dialog/';
import styles from './LeaderboardTableStyle';
type Order = 'asc' | 'desc';

interface IState {
  order: Order;
  orderBy: string;
  selected: string[];
  itemsToCompare: INestedSubmission[];
  rowsPerPage: number;
  page: number;
  open: boolean;
  visualizationContent: any;
  visualizationTitle: string;
}
interface IProps extends WithStyles<typeof styles> {
  classes: any;
  submissions: INestedSubmissionWithAlgorithm[];
}

type IDataRow = {
  id: string;
  name: string;
  version: string;
  date: string;
  algorithm_job: UUID4; // implementation_job
  evaluation_job: UUID4;
  algorithm: IAlgorithm;
} & { [label: string]: string };

class LeaderboardTable extends React.Component<IProps, IState> {
  state: IState = {
    order: 'asc' as Order,
    orderBy: 'score',
    selected: [],
    itemsToCompare: [],
    rowsPerPage: 5,
    page: 0,
    open: false,
    visualizationContent: null,
    visualizationTitle: '',
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
      order,
      orderBy,
      selected,
      itemsToCompare,
      rowsPerPage,
      page,
      visualizationContent,
      visualizationTitle,
    } = this.state;
    const metrics = this.props.submissions[0].metrics;
    let metricFields: string[];
    metrics ? (metricFields = Object.keys(metrics)) : (metricFields = []);
     // Remove submissions with no metrics
    const filteredSubmissions = this.props.submissions.filter((submission) => submission.metrics);

    const data: IDataRow[] = filteredSubmissions.map((submission) => {
      const metric = submission.metrics;
      const url =
        submission.visualization_url &&
        submission.visualization_url + '?id=' + submission.evaluation_job;
      return {
        id: submission.id,
        name: submission.algorithm_data.name,
        version: submission.version,
        implementationJob: submission.algorithm_job,
        visualization: url,
        evaluationJob: submission.evaluation_job,
        date: submission.created,
        algorithm: submission.algorithm_data,
        ...metric,
      };
    });
    let sortedData = sortBy(data, orderBy);
    if (order === 'desc') {
      sortedData = sortedData.reverse();
    }
    const isSelected = (id: string) => selected.indexOf(id) !== -1;
    const handleSelectAllClick = (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      if (event.target.checked) {
        const newSelecteds = data.map((n) => n.id);
        this.setState({
          selected: newSelecteds,
          itemsToCompare: filteredSubmissions,
        });
        return;
      }
      this.setState({ selected: [], itemsToCompare: [] });
    };
    const handleChangePage = (event: unknown, newPage: number) => {
      this.setState({ page: newPage });
    };

    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      this.setState({ rowsPerPage: +event.target.value });
      this.setState({ page: 0 });
    };
    const handleClick = (
      event: React.ChangeEvent<unknown>,
      checked: boolean,
      id: string,
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
          selected.slice(selectedIndex + 1),
        );
      }
      filteredSubmissions.filter((submission) => {
        const index = newSelected.indexOf(submission.id);
        if (index >= 0) {
          compareItems.push(submission);
        }
      });
      this.setState({
        itemsToCompare: compareItems,
        selected: newSelected,
      });
    };
    // const isLoggedIn = localStorage.getItem('comicToken') ? true : false;
    return (
      <Paper className={classes.root}>
        {visualizationContent && (
          <VisualizationDialog
            print={
              visualizationTitle === 'Compare Visualizations' ? true : false
            }
            title={visualizationTitle}
            onClose={() => {
              if (visualizationTitle === 'Compare Visualizations') {
                this.setState({
                  selected: [],
                });
              }
              this.setState({ visualizationContent: null });
            }}
          >
            {visualizationContent}
          </VisualizationDialog>
        )}
        <div className={classes.tableWrapper}>
          <LeadeboardToolbar
            numSelected={selected.length}
            compareItems={() => {
              this.setState({
                visualizationTitle: 'Compare Visualizations',
                visualizationContent: <CompareDialog items={itemsToCompare} />,
              });
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
                        {n.evaluationJob !== 'null' &&
                        n.visualization !== null ? (
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                            onChange={(event, checked) =>
                              handleClick(event, checked, n.id)
                            }
                          />
                        ) : (
                          <Checkbox disabled={true} />
                        )}
                      </TableCell>

                      <TableCell component="td" scope="row">
                        <a
                          onClick={() =>
                            this.setState({
                              visualizationTitle: n.algorithm.name,
                              visualizationContent: (
                                <AlgorithmSubmissionDetails
                                  algorithm={n.algorithm}
                                />
                              ),
                            })
                          }
                        >
                          {n.name}
                        </a>
                      </TableCell>
                      <TableCell component="td" scope="row" align="left">
                        {n.version ? 'v' + n.version : '-'}
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
                            size="small"
                            aria-label="add"
                            color="secondary"
                            onClick={() => {
                              this.setState({
                                visualizationTitle: 'Visualization',
                                visualizationContent: (
                                  <Observable
                                    jobId={n.evaluationJob}
                                    observableUrl={n.visualization.toString()}
                                    isNotebook={true}
                                  />
                                ),
                              });
                            }}
                          >
                            <VisualizationIcon color="primary" />
                          </Fab>
                        ) : (
                          '-'
                        )}
                      </TableCell>
                      <TableCell align="left">
                        {formatDateTime(new Date(n.date))}
                      </TableCell>
                      {/* Commented out job log */}
                     {/*  <TableCell align="left">
                        <Fab
                          disabled={!isLoggedIn}
                          title="Log"
                          variant="round"
                          size="small"
                          color="secondary"
                          onClick={() => {
                            this.setState({
                              visualizationTitle: 'Job Log',
                              visualizationContent: (
                                <JobLog jobID={n.implementationJob} />
                              ),
                            });
                          }}
                        >
                          <Icon color="primary">wrap_text</Icon>
                        </Fab>
                      </TableCell> */}
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
