import React from "react";
import cn from "classnames";
import styles from "./TableFooter.module.css";

function TableFooter({ className, children }) {
  const componentStyles = cn(styles._, className);
  return <div className={componentStyles}>{children}</div>;
}

export default TableFooter;
