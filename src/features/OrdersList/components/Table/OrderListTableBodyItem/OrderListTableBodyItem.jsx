import React from "react";
import cn from "classnames";
import TableRow from "shared/Table/TableRow/TableRow";
import TableCell from "shared/Table/TableCell/TableCell";
import Checkbox from "shared/Chechbox/Checkbox";
import StatusCell from "./StatusCell/StatusCell";
import rowStyles from "../RowMarkup.module.css";
import styles from "./OrderListTableBodyItem.module.css";

const getFormatDate = (date) => {
  const objectDate = new Date(date);
  return `${objectDate.toLocaleDateString()}, ${objectDate
    .toLocaleTimeString()
    .slice(0, 5)}`;
};

function OrderListTableBodyItem({
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
      <TableCell className={rowStyles.checkbox}>
        <Checkbox checked={isChecked} onChange={onChangeCheck} />
      </TableCell>

      <TableCell className={rowStyles.index}>{index}</TableCell>

      <TableCell className={rowStyles.date}>{getFormatDate(date)}</TableCell>

      <TableCell className={rowStyles.status}>
        <StatusCell status={status} />
      </TableCell>

      <TableCell className={rowStyles.numberOfPositions}>
        {numberOfPositions}
      </TableCell>

      <TableCell className={rowStyles.sum}>
        {status === "canceled" ? "-" : sum.toLocaleString("ru")}
        &nbsp;
        {status !== "canceled" && RUB_SYMBOL}
      </TableCell>

      <TableCell className={rowStyles.name}>
        {status === "canceled"
          ? lastName
          : `${lastName} ${firstName} ${secondName}`}
      </TableCell>
    </TableRow>
  );
}

export default OrderListTableBodyItem;
