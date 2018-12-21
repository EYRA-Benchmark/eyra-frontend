import * as React from "react";
import styles from "./Backdrop.module.css";
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
