import { createStyles, Theme } from "@material-ui/core";
const styles = (theme: Theme) =>
  createStyles({
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      cursor: "pointer"
    },
    media: {
      height: 0,
      paddingTop: "56.25%",
      backgroundSize: "contain"
    },
    cardContent: {
      flexGrow: 1
    }
  });
export default styles;
