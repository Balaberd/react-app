import React from "react";
import cn from "classnames";
import TableRow from "shared/Table/TableRow/TableRow";
import TableCell from "shared/Table/TableCell/TableCell";
import Checkbox from "shared/Chechbox/Checkbox";
import StatusCell from "./StatusCell/StatusCell";
import styles from "./OrderListRows.module.css";

function OrderListTableBodyRow({
  isChecked,
  onChangeCheck,
  index,
  date,
  status,
  numberOfPositions,
  sum,
  lastName,
  firstName,
  secondName,
}) {
  const RUB_SYMBOL = <span>&#8381;</span>;
  return (
    <TableRow className={cn(styles.bodyRow, { [styles.checked]: isChecked })}>
      <TableCell className={styles.checkbox}>
        <Checkbox checked={isChecked} onChange={onChangeCheck} />
      </TableCell>

      <TableCell className={styles.index}>{index}</TableCell>

      <TableCell className={styles.date}>
        {`${date.toLocaleDateString()}, ${date
          .toLocaleTimeString()
          .slice(0, 5)}`}
      </TableCell>

      <TableCell className={styles.status}>
        <StatusCell status={status} />
      </TableCell>

      <TableCell className={styles.numberOfPositions}>
        {numberOfPositions}
      </TableCell>

      <TableCell className={styles.sum}>
        {status === "canceled" ? "-" : sum.toLocaleString("ru")}
        &nbsp;
        {status !== "canceled" && RUB_SYMBOL}
      </TableCell>

      <TableCell className={styles.name}>
        {status === "canceled"
          ? lastName
          : `${lastName} ${firstName} ${secondName}`}
      </TableCell>
    </TableRow>
  );
}

export default OrderListTableBodyRow;
