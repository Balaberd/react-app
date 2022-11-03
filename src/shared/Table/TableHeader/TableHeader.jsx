import React from "react";
import cn from "classnames";
import styles from "./TableHeader.module.css";

function TableHeader({ className, children }) {
  const componentStyles = cn(styles._, className);
  return <div className={componentStyles}>{children}</div>;
}

export default TableHeader;
