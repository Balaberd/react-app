import STATUSES_NAMES_TRANSLATION from "features/OrdersList/lib/statusesNamesTranslation";
import React from "react";
import Checkbox from "shared/Chechbox/Checkbox";
import styles from "./StatusesSelector.module.css";

function StatusesSelector({ statusValues, handleChangeStatusValues }) {
  const statuses = Object.entries(statusValues);
  return (
    <>
      {statuses.map((el) => (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className={styles.item} key={el[0]}>
          <Checkbox
            checked={el[1]}
            onChange={() => handleChangeStatusValues(el[0])}
          />
          {STATUSES_NAMES_TRANSLATION[el[0]]}
        </label>
      ))}
    </>
  );
}

export default StatusesSelector;
