import React from 'react';
import JobLog from 'src/components/JobLog';

import {
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContent,
  Slide,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/CloseRounded';

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
      fullWidth={true}
      maxWidth={'md'}
      open={true}
      TransitionComponent={Transition as any}
      keepMounted={true}
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <div style={{ display: 'flex' }}>
        <DialogTitle
          id="alert-dialog-slide-title"
          style={{
            flex: 5,
            textAlign: 'center',
            color: 'var(--primary-color)',
          }}
        >
          Job Log
        </DialogTitle>
        <DialogActions style={{ flex: 1 }}>
          <CloseIcon
            onClick={handleClose}
            color="primary"
            style={{ cursor: 'pointer' }}
          />
        </DialogActions>
      </div>
      <DialogContent style={{ width: '100%', display: 'flex' }}>
        <JobLog jobID={props.jobID} />
      </DialogContent>
    </Dialog>
  );
};

export default JobLogDialog;
