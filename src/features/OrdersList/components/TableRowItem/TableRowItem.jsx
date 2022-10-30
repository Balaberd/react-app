import React from "react";
import cn from "classnames";
import TableCell from "shared/Table/TableRow/TableCell/TableCell";
import TableRow from "shared/Table/TableRow/TableRow";
import styles from "./TableRowItem.module.css";

function TableRowItem({
  isChoosed,
  checkbox,
  index,
  date,
  status,
  numberOfPositions,
  sum,
  name,
}) {
  return (
    <TableRow className={cn({ [styles.checked]: isChoosed })}>
      <TableCell className={styles.checkbox}>{checkbox}</TableCell>
      <TableCell className={styles.index}>{index}</TableCell>
      <TableCell className={styles.date}>{date}</TableCell>
      <TableCell className={styles.status}>{status}</TableCell>
      <TableCell className={styles.numberOfPositions}>
        {numberOfPositions}
      </TableCell>
      <TableCell className={styles.sum}>{sum}</TableCell>
      <TableCell className={styles.name}>{name}</TableCell>
    </TableRow>
  );
}

export default TableRowItem;
