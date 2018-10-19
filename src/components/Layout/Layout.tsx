import { withStyles, WithStyles } from "@material-ui/core";
import * as React from "react";
import Header from "./Header/Header";
import styles from "./LayoutStyle";

interface IProps {
  classes: any;
}
interface IState {
  openSideDrawer: boolean;
}
export type PROPS_WITH_STYLES = IProps & WithStyles<"root">;

export class Layout extends React.Component<PROPS_WITH_STYLES, IState> {
  state = {
    openSideDrawer: false
  };
  public handleDrawerToggle = () => {
    this.setState(prevState => {
      return { openSideDrawer: !prevState.openSideDrawer };
    });
    console.log(this.state.openSideDrawer);
  };
  public render() {
    return <Header menuClicked={this.handleDrawerToggle} />;
  }
}

export default withStyles(styles, { withTheme: true })(Layout);
