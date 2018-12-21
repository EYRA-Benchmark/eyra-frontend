import * as React from "react";
import Subscription from "../../Form/Subscription/Subscription";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";

export interface IProps {
  show: boolean;
  clicked: React.MouseEventHandler<HTMLDivElement>;
}
class Modal extends React.Component<IProps, {}> {
  public render() {
    const { show, clicked } = this.props;
    const style: any = {
      transform: show ? "translateY(0)" : "translateY(-100vh)",
      opacity: show ? "1" : "0"
    };
    return (
      <React.Fragment>
        <Backdrop show={show} clicked={clicked} />
        <div className={styles.modal} style={style}>
          <Subscription />
        </div>
      </React.Fragment>
    );
  }
}
export default Modal;
