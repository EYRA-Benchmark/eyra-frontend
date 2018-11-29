import { createStyles, Theme } from "@material-ui/core";
const drawerWidth = 240;
const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexGrow: 1,
      zIndex: 1,
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      overflow: "hidden"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    content: {
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      margin: "70px 0 0 70px",
      overflowY: "scroll"
    },
    contentShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    }
  });
export default styles;
