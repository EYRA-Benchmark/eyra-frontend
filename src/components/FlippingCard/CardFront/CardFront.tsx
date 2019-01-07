import classNames from "classnames";
import * as React from "react";
import styles from "./CardFront.module.css";

class CardFront extends React.Component {
  render() {
    return (
      <div className={classNames(styles.cardSide, styles.sideFront)}>
        <div className="containerFluid">
          <div className="sideFrontContent">
            <h2>Challenges</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default CardFront;