/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import cn from "classnames";
import React from "react";
import styles from "../Dropdown.module.css";
import OrderMulipleStatusSelectorItem from "./OrderMulipleStatusSelectorItem";

function OrderMulipleStatusSelector() {
  const statuses = [
    "Новый",
    "Расчет",
    "Подтвержден",
    "Отложен",
    "Выполнен",
    "Отменен",
  ];

  return (
    <div className={cn(styles.dropdown, styles.dropdown_status)}>
      {statuses.map((el) => (
        <OrderMulipleStatusSelectorItem status={el} />
      ))}
    </div>
  );
}

export default OrderMulipleStatusSelector;
