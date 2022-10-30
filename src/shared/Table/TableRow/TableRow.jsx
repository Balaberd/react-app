import React from "react";
import cn from "classnames";
import styles from "./TableRow.module.css";

function TableRow({ children, className }) {
  const componentStyles = cn(styles._, className);
  return <div className={componentStyles}>{children}</div>;
}

export default TableRow;
