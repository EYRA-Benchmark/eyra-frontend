import classNames from "classnames";
import * as React from "react";
import styles from "./SearchBar.module.css";
function SearchBar() {
  return (
    <form className={classNames(styles.search_form, styles.desktopOnly)}>
      <input
        className={styles.search_text}
        placeholder="Search here..."
        autoFocus={true}
      />
      <ul className={styles.icons}>
        <li className={styles.web} title="Web Search" />
        <li className={styles.images} title="Image Search" />
        <li className={styles.news} title="News Search" />
        <li className={styles.videos} title="Video Search" />
      </ul>
    </form>
  );
}

export default SearchBar;
