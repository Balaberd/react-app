import React from "react";
import cn from "classnames";
import Checkbox from "shared/Chechbox/Checkbox";
import Icon from "shared/Icon/Icon";
import getValidDateTest from "features/lib/getValidDateTest";
import styles from "./TableItem.module.css";

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
  props: { index, date, status, amountPositions, sum, name },
}) {
  return (
    <div className={styles._}>
      <div className={styles.checkboxCell}>
        <Checkbox />
      </div>
      <div className={styles.numberCell}>{index}</div>
      <div className={styles.dateCell}>{getValidDateTest(date)}</div>
      <div
        className={cn(styles.statusCell, {
          [styles.doneStatus]: status === "Выполнен",
          [styles.canceledStatus]: status === "Отменен",
        })}
      >
        <Icon
          type={STATUS_VALUES_MAP[status].iconType}
          fill={STATUS_VALUES_MAP[status].iconColor}
          stroke={STATUS_VALUES_MAP[status].iconColor}
        />
        {` ${STATUS_VALUES_MAP[status].name}`}
      </div>
      <div className={styles.positionCell}>
        {status === "Отменен" ? "-" : amountPositions}
      </div>
      <div className={styles.sumCell}>{status === "Отменен" ? "-" : sum}</div>
      <div className={styles.nameCell}>{name}</div>
    </div>
  );
}

export default TableItem;
