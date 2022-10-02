/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import cn from "classnames";
import styles from "../Dropdown.module.css";

function OrderSingleStatusSelector() {
  return (
    <div
      className={cn(
        styles.dropdown,
        styles.dropdown_status,
        styles["dropdown_status-single"]
      )}
    >
      <label className={styles.dropdown__item}>
        <input
          className={styles.dropdown__radio}
          type="radio"
          name="dropdown-status-radio"
        />
        <span className={styles["dropdown__item-text"]}>Новый</span>
      </label>

      <label className={styles.dropdown__item}>
        <input
          className={styles.dropdown__radio}
          type="radio"
          name="dropdown-status-radio"
        />
        <span className={styles["dropdown__item-text"]}>Расчет</span>
      </label>

      <label className={styles.dropdown__item}>
        <input
          className={styles.dropdown__radio}
          type="radio"
          name="dropdown-status-radio"
        />
        <span className={styles["dropdown__item-text"]}>Подтвержден</span>
      </label>

      <label className={styles.dropdown__item}>
        <input
          className={styles.dropdown__radio}
          type="radio"
          name="dropdown-status-radio"
        />
        <span className={styles["dropdown__item-text"]}>Отложен</span>
      </label>

      <label className={styles.dropdown__item}>
        <input
          className={styles.dropdown__radio}
          type="radio"
          name="dropdown-status-radio"
        />
        <span className={styles["dropdown__item-text"]}>Выполнен</span>
      </label>

      <label className={styles.dropdown__item}>
        <input
          className={styles.dropdown__radio}
          type="radio"
          name="dropdown-status-radio"
        />
        <span className={styles["dropdown__item-text"]}>Отменен</span>
      </label>
    </div>
  );
}

export default OrderSingleStatusSelector;
