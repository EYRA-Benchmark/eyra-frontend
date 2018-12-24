import { createStyles, Theme } from "@material-ui/core";
const drawerWidth = 240;
const styles = (theme: Theme) =>
  createStyles({
    drawerPaper: {
      position: "fixed",
      whiteSpace: "nowrap",
      width: drawerWidth,
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing.unit * 9
      }
    },
    title: {
      padding: 10,
      color: "#45AFF0"
    }
  });

export default styles;
