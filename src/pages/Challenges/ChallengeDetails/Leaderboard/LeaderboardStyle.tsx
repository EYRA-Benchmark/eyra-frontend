import { createStyles, Theme } from "@material-ui/core";
const styles = (theme: Theme) =>
  createStyles({
    table: {
      fontFamily: theme.typography.fontFamily
    },
    flexContainer: {
      display: "flex",
      alignItems: "center",
      boxSizing: "border-box"
    },
    tableRow: {
      cursor: "pointer"
    },
    tableRowHover: {
      "&:hover": {
        backgroundColor: theme.palette.grey[200]
      }
    },
    tableCell: {
      flex: 1
    },
    noClick: {
      cursor: "initial"
    }
  });
export default styles;
