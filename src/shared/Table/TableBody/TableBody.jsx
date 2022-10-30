import React from "react";
import cn from "classnames";
import styles from "./TableBody.module.css";

function TableBody({ className, children }) {
  const componentStyles = cn(styles._, className);
  return <div className={componentStyles}>{children}</div>;
}

export default TableBody;
