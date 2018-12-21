import classNames from "classnames";
import * as React from "react";
import styles from "./CardBack.module.css";
class CardBack extends React.Component {
  render() {
    return (
      <div className={classNames(styles.cardSide, styles.sideBack)}>
        <div className="containerFluid">
          <h1>Let's get in touch!</h1>
        </div>
      </div>
    );
  }
}
export default CardBack;
