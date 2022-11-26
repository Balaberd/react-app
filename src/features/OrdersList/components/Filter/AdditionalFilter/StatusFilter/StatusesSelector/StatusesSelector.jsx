import { STATUSES_NAMES_TRANSLATION } from "features/OrdersList/const";
import React from "react";
import Checkbox from "shared/Chechbox/Checkbox";
import styles from "./StatusesSelector.module.css";

const STATUSES = [
  "new",
  "calculating",
  "confirm",
  "postponed",
  "done",
  "canceled",
];

function StatusesSelector({ choosedStatuses, onChangeChoosedStatus }) {
  return (
    <>
      {STATUSES.map((status) => (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className={styles.item} key={status}>
          <Checkbox
            checked={choosedStatuses.includes(status)}
            onChange={() => onChangeChoosedStatus(status)}
          />
          {STATUSES_NAMES_TRANSLATION[status]}
        </label>
      ))}
    </>
  );
}

export default StatusesSelector;
