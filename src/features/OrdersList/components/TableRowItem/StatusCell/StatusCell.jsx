import React from "react";
import cn from "classnames";
import Icon from "shared/Icon/Icon";
import styles from "./StatusCell.module.css";

const STATUS_VALUES_MAP = {
  new: {
    name: "Новый",
    iconType: "dot",
    iconColor: "#FF8C56",
  },
  calculating: {
    name: "Расчет",
    iconType: "dot",
    iconColor: "#459DF5",
  },
  confirm: {
    name: "Подтвержден",
    iconType: "dot",
    iconColor: "#0FB864",
  },
  postponed: {
    name: "Отложен",
    iconType: "dot",
    iconColor: "#FF8C56",
  },
  done: {
    name: "Выполнен",
    iconType: "check",
    iconColor: "#0FB864",
  },
  canceled: {
    name: "Отменен",
    iconType: "abort",
    iconColor: "black",
  },
};

function StatusCell({ status }) {
  const componentStyles = cn(styles._, {
    [styles.done]: status === "done",
    [styles.canceled]: status === "canceled",
  });
  return (
    <div className={componentStyles}>
      <Icon
        type={STATUS_VALUES_MAP[status].iconType}
        fill={STATUS_VALUES_MAP[status].iconColor}
        stroke={STATUS_VALUES_MAP[status].iconColor}
      />
      {` ${STATUS_VALUES_MAP[status].name}`}
    </div>
  );
}

export default StatusCell;
