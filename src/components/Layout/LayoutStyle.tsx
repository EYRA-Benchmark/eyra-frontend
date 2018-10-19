import { StyleRulesCallback } from "@material-ui/core";

export const styles: StyleRulesCallback<"root"> = theme => ({
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
  }
});
export default styles;
