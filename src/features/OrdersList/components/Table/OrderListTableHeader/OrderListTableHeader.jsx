import React, { useState } from "react";
import cn from "classnames";
import TableHeader from "shared/Table/TableHeader/TableHeader";
import TableBody from "shared/Table/TableBody/TableBody";
import Icon from "shared/Icon/Icon";
import styles from "./OrderListTableHeader.module.css";
import OrderListTableRow from "../OrderListTableRow/OrderListTableRow";

function OrderListTableHeader() {
  const [activeSorter, setActiveSorter] = useState("date");

  const handleCreator = (status) => () => {
    // eslint-disable-next-line no-unused-expressions
    activeSorter !== status && setActiveSorter(status);
  };

  const createElement = (statusValue, text) => (
    <button
      className={cn(styles.button, {
        [styles.active]: activeSorter === statusValue,
      })}
      onClick={handleCreator(statusValue)}
    >
      {text}
      <Icon type="arrow" className={styles.icon} />
    </button>
  );

  return (
    <TableHeader>
      <OrderListTableRow
        hasPaddingInCell={false}
        index="#"
        date={createElement("date", "Дата")}
        status={createElement("status", "Статус")}
        positions={createElement("positions", "Позиций")}
        sum={createElement("sum", "Сумма")}
        name="ФИО покупателя"
      />
      <TableBody>123</TableBody>
    </TableHeader>
  );
}

export default OrderListTableHeader;
