import React from 'react';
import CloseIcon from '@material-ui/icons/CloseRounded';
import {
    Paper,
    DialogActions,
    Dialog,
    DialogTitle,
    DialogContent,
} from '@material-ui/core';

import Slide from '@material-ui/core/Slide';
import { INestedSubmission } from '..';
import styles from './styles.css';
interface IProps {
    items: INestedSubmission[];
    onClose: () => any | undefined;
}

// tslint:disable-next-line:no-shadowed-variable
const Transition = React.forwardRef(function Transition(props, ref) {
    // @ts-ignore
    return <Slide direction="up" ref={ref} {...props} />;
});

const CompareDialog = (props: IProps) => {
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
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <div style={{ display: 'flex' }}>
                <DialogTitle id="alert-dialog-slide-title">
                    Compare Algorithms
                </DialogTitle>
                <DialogActions style={{ flex: 1 }}>
                    <CloseIcon onClick={handleClose} color="primary" style={{ cursor: 'pointer' }} />
                </DialogActions>
            </div>
            <DialogContent className={styles.container}>
                {props.items.map((item, i) => {
                    return (
                        <Paper key={i} className={styles.item}>
                            {item.name}
                        </Paper>);
                })}
            </DialogContent>

        </Dialog>
    );
};

export default CompareDialog;
