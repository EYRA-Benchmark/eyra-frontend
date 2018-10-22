import { withStyles, WithStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import * as React from "react";
import menus from "../../Navigation/Menu_Data";
import NavigationMenu from "../../Navigation/NavigationMenu/NavigationMenu";
import styles from "./SideDrawerStyle";
interface IProps extends WithStyles<typeof styles> {
  classes: any;
  open: boolean;
}

export class SideDrawer extends React.Component<IProps, {}> {
  public render() {
    const { classes, open } = this.props;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !open && classes.drawerPaperClose
          )
        }}
        open={open}
      >
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            EYRA
          </Typography>
        </Toolbar>
        <Divider />
        <NavigationMenu menus={menus} />
      </Drawer>
    );
  }
}

export default withStyles(styles)(SideDrawer);
