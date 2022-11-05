import React from "react";
import cn from "classnames";
import styles from "./Table.module.css";

function Table({ className, children }) {
  const componentStyles = cn(styles._, className);
  return <div className={componentStyles}>{children}</div>;
}

export default Table;
