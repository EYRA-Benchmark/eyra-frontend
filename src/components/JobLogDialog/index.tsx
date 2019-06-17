import React from 'react';
import JobLog from 'src/components/JobLog';

import {
  Paper,
  Typography,
  DialogActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@material-ui/core';

import Slide from '@material-ui/core/Slide';

import { UUID4 } from 'src/types';

interface IJobLogDialogProps {
  jobID: UUID4;
  onClose: () => any | undefined;
}

// tslint:disable-next-line:no-shadowed-variable
const Transition = React.forwardRef(function Transition(props, ref) {
  // @ts-ignore
  return <Slide direction="up" ref={ref} {...props} />;
});

const JobLogDialog = (props: IJobLogDialogProps) => {
  const handleClose = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <Dialog
      open={true}
      TransitionComponent={Transition as any}
      keepMounted={true}
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        <Typography component="h1" variant="h5">
          Job log
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Paper>
          <JobLog jobID={props.jobID}/>
        </Paper>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JobLogDialog;