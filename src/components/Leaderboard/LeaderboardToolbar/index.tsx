import React from 'react';
import { Toolbar, Typography, Tooltip, IconButton } from '@material-ui/core';
import CompareIcon from '@material-ui/icons/Compare';
import useToolbarStyles from './ToolbarStyles';
import classnames from 'classnames';
interface LeaderboardToolbarProps {
    numSelected: number;
    //compareItems: () => void;
}

const LeaderboardToolbar = (props: LeaderboardToolbarProps) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
    return (
        <Toolbar
            className={classnames(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            <div className={classes.title}>
                {numSelected > 0 ? (
                    <Typography variant="subtitle1">
                        {numSelected} selected
            </Typography>
                ) : (
                        <Typography variant="h6" id="tableTitle">
                            Algorithms
            </Typography>
                    )}
            </div>
            <div className={classes.spacer} />
            <div className={classes.actions}>
                {numSelected > 0 ? (
                    <Tooltip title="Compare">
                        <IconButton aria-label="Compare" onClick={props.compareItems}>
                            <CompareIcon />
                        </IconButton>
                    </Tooltip>
                ) :
                    null
                }
            </div>
        </Toolbar>
    );
};
export default LeaderboardToolbar;
