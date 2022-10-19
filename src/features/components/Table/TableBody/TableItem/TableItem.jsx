import React from "react";
import cn from "classnames";
import styles from "./TableItem.module.css";
import Checkbox from "../../../../../shared/Chechbox/Checkbox";
import Icon from "../../../../../shared/Icon/Icon";

const STATUS_VALUES_MAP = {
  Новый: {
    name: "Новый",
    iconType: "dot",
    iconColor: "#FF8C56",
  },
  Расчет: {
    name: "Расчет",
    iconType: "dot",
    iconColor: "#459DF5",
  },
  Подтвержден: {
    name: "Подтвержден",
    iconType: "dot",
    iconColor: "#0FB864",
  },
  Отложен: {
    name: "Отложен",
    iconType: "dot",
    iconColor: "#FF8C56",
  },
  Выполнен: {
    name: "Выполнен",
    iconType: "check",
    iconColor: "#0FB864",
  },
  Отменен: {
    name: "Отменен",
    iconType: "abort",
    iconColor: "black",
  },
};

function TableItem({
  props: { id, date, status, amountPositions, sum, name },
  isChecked,
}) {
  return (
    <div
      className={cn(styles.rowWrapper, {
        [styles.rowWrapper_checked]: !!isChecked,
      })}
    >
      <div className={styles.checkboxBlock}>
        <Checkbox />
      </div>
      <div className={styles.numberBlock}>{id}</div>
      <div className={styles.dateBlock}>{date}</div>
      <div
        className={cn(styles.statusBlock, {
          [styles.statusBlock_doneStatus]: status === "Выполнен",
          [styles.statusBlock_canceledStatus]: status === "Отменен",
        })}
      >
        <Icon
          type={STATUS_VALUES_MAP[status].iconType}
          fill={STATUS_VALUES_MAP[status].iconColor}
          stroke={STATUS_VALUES_MAP[status].iconColor}
        />
        {` ${STATUS_VALUES_MAP[status].name}`}
      </div>
      <div className={styles.positionBlock}>
        {status === "Отменен" ? "-" : amountPositions}
      </div>
      <div className={styles.sumBlock}>{status === "Отменен" ? "-" : sum}</div>
      <div className={styles.nameBlock}>{name}</div>
    </div>
  );
}

export default TableItem;
