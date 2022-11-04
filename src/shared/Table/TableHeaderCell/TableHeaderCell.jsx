import React from "react";
import cn from "classnames";
import styles from "./TableHeaderCell.module.css";

function TableHeaderCell({ className, children, ...props }) {
  const componentStyles = cn(styles._, className);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button className={componentStyles} {...props}>
      {children}
    </button>
  );
}

export default TableHeaderCell;
