import * as React from "react";
import * as styles from "./Backdrop.css";
export interface IProps {
  show: boolean;
  clicked: React.MouseEventHandler<HTMLDivElement>;
}
function backdrop({ show, clicked }: IProps) {
  if (show) {
    return <div className={styles.backdrop} onClick={clicked} />;
  }
  return null;
}

export default backdrop;
