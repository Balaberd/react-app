import STATUSES_NAMES_TRANSLATION from "features/OrdersList/lib/statusesNamesTranslation";
import React from "react";
import Checkbox from "shared/Chechbox/Checkbox";
import styles from "./StatusesSelector.module.css";

function StatusesSelector({ statusValues, handleChangeStatusValues }) {
  const statuses = Object.entries(statusValues);
  return (
    <>
      {statuses.map(([statusName, statusValue]) => (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className={styles.item} key={statusName}>
          <Checkbox
            checked={statusValue}
            onChange={() => handleChangeStatusValues(statusName)}
          />
          {STATUSES_NAMES_TRANSLATION[statusName]}
        </label>
      ))}
    </>
  );
}

export default StatusesSelector;
