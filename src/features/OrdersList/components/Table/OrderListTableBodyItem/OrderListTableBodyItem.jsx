/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import cn from "classnames";
import TableRow from "shared/Table/TableRow/TableRow";
import TableCell from "shared/Table/TableCell/TableCell";
import Checkbox from "shared/Chechbox/Checkbox";
import { getFormatDate } from "features/OrdersList/lib/getObjectDate";
import { useSelector } from "react-redux";
import StatusCell from "./StatusCell/StatusCell";
import rowStyles from "../RowMarkup.module.css";
import styles from "./OrderListTableBodyItem.module.css";

function OrderListTableBodyItem({
  isChecked,
  onChangeCheck,
  id,
  index,
  date,
  status,
  numberOfPositions,
  sum,
  customerName,
  onClick,
}) {
  const RUB_SYMBOL = <span>&#8381;</span>;
  const checkedModalFormOrderId = useSelector((state) => state.modal.orderId);
  return (
    <TableRow
      className={cn(styles.bodyRow, {
        [styles.checked]: isChecked || checkedModalFormOrderId === id,
      })}
    >
      <TableCell className={rowStyles.checkbox}>
        <Checkbox checked={isChecked} onChange={onChangeCheck} />
      </TableCell>

      <div className={styles.withoutCheckbox} onClick={onClick}>
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
          {status === "canceled" ? customerName.split(" ")[0] : customerName}
        </TableCell>
      </div>
    </TableRow>
  );
}

export default OrderListTableBodyItem;
