import * as React from 'react';
import moment from 'moment';
import {
  Fab,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Icon,
  TablePagination,
} from '@material-ui/core';
import { INestedSubmission } from 'src/pages/submissions';
import { UUID4 } from 'src/types';
import CheckIcon from '@material-ui/icons/CheckCircle';
import FailedIcon from '@material-ui/icons/Close';
import PendingIcon from '@material-ui/icons/HourglassEmpty';
import SubmissionHeader from './SubmissionHeader';
import { sortBy } from 'lodash';
import VisualizationDialog from '../Dialog';
import JobLog from '../JobLog';

interface IProps {
  submissions: INestedSubmission[];
  showMore: boolean;
}
type IDataRow = {
  id: string,
  benchmark: string,
  started: string,
  name: string,
  implementation_status: string,
  runtime_implementation: string,
  evaluation_status: string,
  runtime_evaluation: string,
  action: UUID4,
};
const jobStatusCodes = {
  0: 'Pending',
  1: 'Started',
  2: 'Retry',
  3: 'Failure',
  4: 'Success',
  5: 'Cancelled',
};

const timeDiff = (date1: string, date2: string): string => {
  const pad = (num: number) => ('00' + num).slice(-2);
  const duration = moment.duration(moment(date2).diff(moment(date1)));
  return `${pad(duration.hours())}:${pad(duration.minutes())}:${pad(duration.seconds())}`;
};

type Order = 'asc' | 'desc';

interface IState {
  order: Order;
  orderBy: string;
  rowsPerPage: number;
  page: number;
  openJobLogID: UUID4 | null;
  submissionName: string;
}

class SubmissionsTable extends React.Component<IProps, IState> {
  state: IState = {
    order: 'asc',
    orderBy: 'benchmark',
    rowsPerPage: 3,
    page: 0,
    openJobLogID: '',
    submissionName: '',
  };
  handleRequestSort = (event: any, property: any) => {
    const orderBy = property;
    let order: Order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  }

  render() {
    const { order, orderBy, openJobLogID, rowsPerPage, page, submissionName } = this.state;
    const { showMore } = this.props;
    const data: IDataRow[] = this.props.submissions.map((submission) => {
      return {
        id: submission.id,
        benchmark: submission.submission_benchmark.name,
        started: submission.created,
        name: submission.name,
        implementation_status: jobStatusCodes[submission.implementation_job.status],
        runtime_implementation: timeDiff(submission.implementation_job.started, submission.implementation_job.stopped),
        evaluation_status: jobStatusCodes[submission.evaluation_job.status],
        runtime_evaluation: timeDiff(submission.evaluation_job.started, submission.evaluation_job.stopped),
        action: submission.implementation_job.id,
      };
    });

    let sortedData = sortBy(data, orderBy);
    if (order === 'desc') {
      sortedData = sortedData.reverse();
    }

    const handleChangePage = (event: unknown, newPage: number) => {
      this.setState({ page: newPage });
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ rowsPerPage: +event.target.value });
      this.setState({ page: 0 });
    };
    const renderStatusIcon = (status: string) => {
      let icon;
      switch (status) {
        case 'Success':
          icon = <Icon><CheckIcon style={{ color: '#4caf50' }} /></Icon>;
          break;
        case 'Failure':
          icon = <Icon><FailedIcon style={{ color: '#ed2939' }} /></Icon>;
          break;
        case 'Pending':
        case 'Started':
          icon = <Icon><PendingIcon /></Icon>;
          break;
        default: icon = status;
      }
      return icon;
    };
    return (
      <Paper id="submissions">
        {
          openJobLogID &&
          <VisualizationDialog
            print={false}
            title={submissionName}
            onClose={() => this.setState({ openJobLogID: null, submissionName: '' })}
          >
            <JobLog jobID={openJobLogID} />
          </VisualizationDialog>
        }

        <div style={{ overflowX: 'scroll' }}>
          <Table aria-labelledby="Submission Table" >
            <SubmissionHeader
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
            />
            <TableBody>
              {sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((n, i: number) => (
                <TableRow hover={true} tabIndex={-1} key={i}>
                  <TableCell component="td" scope="row">
                    {n.benchmark}
                  </TableCell>
                  <TableCell component="td" scope="row">
                    {moment(n.started).format('DD-MM-YYYY HH:mm')}
                  </TableCell>
                  <TableCell component="td" scope="row">
                    {n.name}
                  </TableCell>
                  <TableCell component="td" scope="row">
                    {renderStatusIcon(n.implementation_status)}
                  </TableCell>
                  <TableCell component="td" scope="row">
                    {n.runtime_implementation}
                  </TableCell>
                  <TableCell component="td" scope="row">
                    {renderStatusIcon(n.evaluation_status)}
                  </TableCell>
                  <TableCell component="td" scope="row">
                    {n.runtime_evaluation}
                  </TableCell>

                  <TableCell align="left">
                    <Fab
                      title="Log"
                      variant="round"
                      size="small"
                      color="secondary"
                      onClick={() => this.setState({ openJobLogID: n.action, submissionName: n.name })}
                    >
                      <Icon color="primary">wrap_text</Icon>
                    </Fab>

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {showMore ?
          <TablePagination
            rowsPerPageOptions={[3, 10, 25]}
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
          /> : null}
      </Paper>
    );
  }
}

export default SubmissionsTable;
