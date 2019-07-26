import React from 'react';

import { Typography, Tabs, Tab } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
interface IProps {
    onChange: () => {},
    activeIndex: number,
}
class ProfileTabs extends React.Component<IProps> {

    //handleChange = (_, activeIndex) => this.setState({ activeIndex })
    render() {

        return (
            <div
                style={{
                    display: 'flex',
                }}
            >
                <VerticalTabs
                    value={this.props.activeIndex}
                    onChange={this.props.onChange}
                >
                    <MyTab label='Overview' />
                    <MyTab label='Benchmarks' />
                    <MyTab label='Submissions' />
                </VerticalTabs>
            </div>
        )
    }
}

const VerticalTabs = withStyles(theme => ({
    flexContainer: {
        flexDirection: 'column'
    },
    root: {
        width: '100%'
    },
    indicator: {
        display: 'none',
    }
}))(Tabs)

const MyTab = withStyles(theme => ({
    selected: {
        color: theme.palette.primary.main,
    }
}))(Tab);


export default ProfileTabs;