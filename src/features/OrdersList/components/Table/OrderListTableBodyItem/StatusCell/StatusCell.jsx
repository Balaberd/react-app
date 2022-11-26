import React from "react";
import cn from "classnames";
import Icon from "shared/Icon/Icon";
import { STATUSES_NAMES_TRANSLATION } from "features/OrdersList/const";
import styles from "./StatusCell.module.css";

const ICON_SETTINGS_MAP = {
  new: {
    iconType: "dot",
    iconColor: "#FF8C56",
  },
  calculating: {
    iconType: "dot",
    iconColor: "#459DF5",
  },
  confirm: {
    iconType: "dot",
    iconColor: "#0FB864",
  },
  postponed: {
    iconType: "dot",
    iconColor: "#FF8C56",
  },
  done: {
    iconType: "check",
    iconColor: "#0FB864",
  },
  canceled: {
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
        type={ICON_SETTINGS_MAP[status].iconType}
        fill={ICON_SETTINGS_MAP[status].iconColor}
        stroke={ICON_SETTINGS_MAP[status].iconColor}
      />
      {STATUSES_NAMES_TRANSLATION[status]}
    </div>
  );
}

export default StatusCell;
