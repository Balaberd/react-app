import React from "react";
import cn from "classnames";
import orders from "features/lib/orders";
import styles from "./TableBody.module.css";
import TableItem from "./TableItem/TableItem";

function TableBody() {
  const componentStyles = cn(styles._);
  return (
    <div className={componentStyles}>
      {orders.map((el) => (
        <TableItem props={el} key={el.id} />
      ))}
    </div>
  );
}

export default TableBody;
