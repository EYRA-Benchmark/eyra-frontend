import * as React from 'react';
import moment from 'moment';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Icon,
  TableHead,
} from '@material-ui/core';
import { INestedSubmission } from 'src/pages/Submissions';
import { UUID4 } from 'src/types';
import CheckIcon from '@material-ui/icons/CheckCircle';
import JobLogDialog from 'src/components/JobLogDialog';
import FailedIcon from '@material-ui/icons/Close';
interface IProps {
  submissions: INestedSubmission[];
}

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

const SubmissionsTable = (props: IProps) => {
  const data = props.submissions;
  const sortedData = data;

  const tableHeaders = [
    'Started',
    'Name',
    'Status (impl.)',
    'Run time (impl.)',
    'Status (eval.)',
    'Run time (eval.)',
    'Actions',
  ];

  const [openJobLogID, setOpenJobLogID] = React.useState<UUID4 | null>(null);
  debugger;
  return (
    <Paper>
      {openJobLogID && (
        <JobLogDialog jobID={openJobLogID} onClose={() => setOpenJobLogID(null)} />
      )}
      <div>
        <Table aria-labelledby="tableTitle">
          <TableHead>
            <TableRow>
              {tableHeaders.map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((n, i: number) => (
              <TableRow hover={true} tabIndex={-1} key={i}>
                <TableCell component="td" scope="row">
                  {moment(n.created).format('DD-MM-YYYY HH:mm')}
                </TableCell>
                <TableCell component="td" scope="row">
                  {n.name}
                </TableCell>
                <TableCell component="td" scope="row">
                  {jobStatusCodes[n.implementation_job.status] === 'Success' ? <Icon><CheckIcon style={{ color: '#4caf50' }} /></Icon> : <Icon><FailedIcon /></Icon>}
                </TableCell>
                <TableCell component="td" scope="row">
                  {timeDiff(n.implementation_job.started, n.implementation_job.stopped)}
                </TableCell>
                <TableCell component="td" scope="row">
                  {jobStatusCodes[n.evaluation_job.status] === 'Success' ? <Icon><CheckIcon style={{ color: '#4caf50' }} /></Icon> : <Icon><FailedIcon /></Icon>}
                </TableCell>
                <TableCell component="td" scope="row">
                  {timeDiff(n.evaluation_job.started, n.evaluation_job.stopped)}
                </TableCell>
                <TableCell component="td" scope="row">
                  <Button
                    variant="outlined"
                    color="primary"
                    type="button"
                    onClick={() => setOpenJobLogID(n.implementation_job.id)}
                  >
                    <Icon>wrap_text</Icon> Log
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
};

// const wrapper = withStyles(styles);
export default SubmissionsTable;
