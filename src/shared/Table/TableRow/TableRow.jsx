import React from "react";
import cn from "classnames";
import styles from "./TableRow.module.css";

function TableRow({ className, children, ...props }) {
  const componentStyles = cn(styles._, className);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={componentStyles} {...props}>
      {children}
    </div>
  );
}

export default TableRow;
