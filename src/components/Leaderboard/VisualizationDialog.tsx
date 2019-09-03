import React, { ReactNode } from 'react';
import CloseIcon from '@material-ui/icons/CloseRounded';
import {
    DialogActions,
    Dialog,
    DialogTitle,
    DialogContent,
} from '@material-ui/core';

import Slide from '@material-ui/core/Slide';

interface IProps {
    title: string;
    children: ReactNode;
    onClose: () => any | undefined;
}

// tslint:disable-next-line:no-shadowed-variable
const Transition = React.forwardRef(function Transition(props, ref) {
    // @ts-ignore
    return <Slide direction="up" ref={ref} {...props} />;
});

const VisualizationDialog = (props: IProps) => {
    const handleClose = () => {
        if (props.onClose) {
            props.onClose();
        }
    };
    return (
        <Dialog
            fullWidth={true}
            maxWidth={'lg'}
            open={true}
            TransitionComponent={Transition as any}
            keepMounted={true}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <div style={{ display: 'flex' }}>
                <DialogTitle id="alert-dialog-slide-title">
                    {props.title}
                </DialogTitle>
                <DialogActions style={{ flex: 1 }}>
                    <CloseIcon onClick={handleClose} color="primary" style={{ cursor: 'pointer' }} />
                </DialogActions>
            </div>
            <DialogContent >
                {props.children}
            </DialogContent>

        </Dialog>
    );
};

export default VisualizationDialog;
