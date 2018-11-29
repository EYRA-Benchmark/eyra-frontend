import { withStyles, WithStyles } from "@material-ui/core";
import classNames from "classnames";
import * as React from "react";
import ReactRouter from "../../Routes";
import Header from "./Header/Header";
import styles from "./LayoutStyle";
import SideDrawer from "./SideDrawer/SideDrawer";
interface IProps extends WithStyles<typeof styles> {
  classes: any;
}
interface IState {
  openSideDrawer: boolean;
}

export class Layout extends React.Component<IProps, IState> {
  state = {
    openSideDrawer: false
  };

  handleDrawerToggle = () => {
    this.setState(prevState => {
      return { openSideDrawer: !prevState.openSideDrawer };
    });
  };
  render() {
    const { classes } = this.props;
    const { openSideDrawer } = this.state;
    return (
      <div className={classes.root}>
        <Header
          // drawerToggle={this.handleDrawerToggle}
          classes={classNames(
            classes.appBar,
            openSideDrawer && classes.appBarShift
          )}
        />
        <SideDrawer open={openSideDrawer} />
        <main
          className={classNames(
            classes.content,
            this.state.openSideDrawer && classes.contentShift
          )}
        >
          <ReactRouter />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
