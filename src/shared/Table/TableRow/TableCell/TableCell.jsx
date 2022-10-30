import React from "react";
import cn from "classnames";
import styles from "./TableCell.module.css";

function TableCell({ className, children }) {
  const componentStyles = cn(styles._, className);
  return <div className={componentStyles}>{children}</div>;
}

export default TableCell;
