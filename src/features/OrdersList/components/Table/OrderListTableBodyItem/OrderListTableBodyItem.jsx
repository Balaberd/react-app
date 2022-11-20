/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import cn from "classnames";
import TableRow from "shared/Table/TableRow/TableRow";
import TableCell from "shared/Table/TableCell/TableCell";
import Checkbox from "shared/Chechbox/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { getFormatedDate } from "features/OrdersList/lib/date";
import { openModal } from "features/OrdersList/model/modal/modalSlice";
import { getCheckedOrdersID } from "features/OrdersList/model/selectors";
import StatusCell from "./StatusCell/StatusCell";
import rowStyles from "../RowMarkup.module.css";
import styles from "./OrderListTableBodyItem.module.css";

function OrderListTableBodyItem({
  onChangeCheck,
  id,
  index,
  date,
  status,
  numberOfPositions,
  sum,
  customerName,
}) {
  const RUB_SYMBOL = <span>&#8381;</span>;
  const checkedModalFormOrderId = useSelector((state) => state.modal.orderId);
  const checkedOrders = useSelector(getCheckedOrdersID);

  const dispatch = useDispatch();
  const handleOpenModal = (order) => {
    dispatch(openModal(order));
  };
  const isChecked = checkedOrders.includes(id);

  return (
    <TableRow
      className={cn(styles.bodyRow, {
        [styles.checked]: isChecked || checkedModalFormOrderId === id,
      })}
    >
      <TableCell className={rowStyles.checkbox}>
        <Checkbox checked={isChecked} onChange={onChangeCheck} />
      </TableCell>

      <div
        className={styles.withoutCheckbox}
        onClick={() =>
          handleOpenModal({ id, date, index, status, customerName })
        }
      >
        <TableCell className={rowStyles.index}>{index}</TableCell>

        <TableCell className={rowStyles.date}>
          {getFormatedDate(date)}
        </TableCell>

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
