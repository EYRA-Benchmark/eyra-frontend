import React from 'react';
import { Toolbar, Typography, Tooltip, Icon, Button } from '@material-ui/core';
import useToolbarStyles from './ToolbarStyles';
import classnames from 'classnames';
interface ILeaderboardToolbarProps {
    numSelected: number;
    compareItems: () => void;
}

const LeaderboardToolbar = (props: ILeaderboardToolbarProps) => {
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
                        {numSelected} selected to compare
            </Typography>
                ) : (
                        <Typography variant="h6" id="tableTitle">
                            Submissions
            </Typography>
                    )}
            </div>
            <div className={classes.spacer} />
            <div className={classes.actions}>
                {numSelected >= 2 ? (
                    <Tooltip title="Compare">
                        <Button
                            variant="outlined"
                            color="primary"
                            type="button"
                            onClick={props.compareItems}
                        >
                            <Icon>compare</Icon> Compare
                        </Button>
                    </Tooltip>
                ) :
                    null
                }
            </div>
        </Toolbar>
    );
};
export default LeaderboardToolbar;
