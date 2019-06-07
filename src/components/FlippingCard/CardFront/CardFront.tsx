import classNames from 'classnames';
import * as React from 'react';
import styles from './CardFront.module.css';

class CardFront extends React.Component<{ name: string }, {}> {
  render() {
    return (
      <div className={classNames(styles.cardSide, styles.sideFront)}>
        <div className="containerFluid">
          <div className="sideFrontContent">
            <h2>{this.props.name}</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default CardFront;
