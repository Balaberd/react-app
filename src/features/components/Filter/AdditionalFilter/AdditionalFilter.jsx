import React from "react";
import cn from "classnames";
import styles from "./AdditionalFilter.module.css";

function AdditionalFilter({ className, children }) {
  const componentStyles = cn(styles.filter__additional, className);
  return <div className={componentStyles}>{children}</div>;
}

export default AdditionalFilter;
