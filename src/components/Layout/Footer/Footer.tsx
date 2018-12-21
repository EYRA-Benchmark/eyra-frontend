import classNames from "classnames";
import * as React from "react";
import * as styles from "./Footer.css";
export interface IProps {
  showModal: React.MouseEventHandler<HTMLButtonElement>;
}
function Footer({ showModal }: IProps) {
  return (
    <div style={{ position: "relative" }}>
      <div className={classNames(styles.content, styles.bgBlue)}>
        <h3>Stay up to date, sign up for our newsletter</h3>
        <div className={styles.buttonContainer}>
          <button className={styles.sendButton} onClick={showModal}>
            Subscribe
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <p>
          By{" "}
          <a href="https://www.esciencecenter.nl/" target="_blank">
            Netherlands eScience Center
          </a>{" "}
          & <a href="https://www.surf.nl/">SURF</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
