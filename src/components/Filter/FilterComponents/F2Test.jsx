/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import cn from "classnames";
import OrderMulipleStatusSelector from "../../UI/Dropdowns/OrderMulipleStatusSelector/OrderMulipleStatusSelector";
import Icon from "../../UI/Icon/Icon";
import styles from "./F2Test.module.css";

function F2() {
  const statuses = [
    "Новый",
    "Расчет",
    "Подтвержден",
    "Отложен",
    "Выполнен",
    "Отменен",
  ];
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  return (
    <div className={styles.label}>
      Статус заказа
      <div
        className={styles.content}
        onClick={() => setDropdownVisibility(!dropdownVisibility)}
      >
        {statuses.map(
          (el) =>
            `${el}${
              statuses.length === 1 || el === statuses[statuses.length - 1]
                ? ""
                : ", "
            }`
        )}
        <div
          className={cn(styles.iconWrapper, {
            [styles.iconWrapper_active]: dropdownVisibility,
          })}
        >
          <Icon type="arrow" />
        </div>
        <div
          className={cn(styles["dropdown-wrapper"], {
            [styles["dropdown-wrapper_unvisible"]]: !dropdownVisibility,
          })}
        >
          <OrderMulipleStatusSelector />
        </div>
      </div>
    </div>
  );
}

export default F2;
