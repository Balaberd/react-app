import React from "react";
import cn from "classnames";
import TableRow from "shared/Table/TableRow/TableRow";
import TableCell from "shared/Table/TableRow/TableCell/TableCell";
import Checkbox from "shared/Chechbox/Checkbox";
import styles from "./OrderListTableRow.module.css";

function OrderListTableRow({
  isBodyItem,
  isChecked,
  hasPaddingInCell = true,
  handleChangeCheck,
  index,
  date,
  status,
  positions,
  sum,
  name,
}) {
  const rowStyles = cn({
    [styles.bodyRow]: isBodyItem,
    [styles.checked]: isChecked,
  });

  return (
    <TableRow className={rowStyles}>
      <TableCell className={styles.checkbox}>
        <Checkbox defaultChecked={isChecked} onChange={handleChangeCheck} />
      </TableCell>

      <TableCell className={cn(styles.index, styles.padding)}>
        {index}
      </TableCell>

      <TableCell
        className={cn(styles.date, { [styles.padding]: hasPaddingInCell })}
      >
        {date}
      </TableCell>

      <TableCell
        className={cn(styles.status, { [styles.padding]: hasPaddingInCell })}
      >
        {status}
      </TableCell>

      <TableCell
        className={cn(styles.positions, { [styles.padding]: hasPaddingInCell })}
      >
        {positions}
      </TableCell>

      <TableCell
        className={cn(styles.sum, { [styles.padding]: hasPaddingInCell })}
      >
        {sum}
      </TableCell>

      <TableCell className={cn(styles.name, styles.padding)}>{name}</TableCell>
    </TableRow>
  );
}

export default OrderListTableRow;
