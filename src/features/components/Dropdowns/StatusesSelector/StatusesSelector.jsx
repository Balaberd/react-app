/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import Checkbox from "shared/Chechbox/Checkbox";
import styles from "./StatusesSelector.module.css";

function StatusesSelector({ statusValues, handleChangeStatusValues }) {
  const statuses = Object.entries(statusValues);
  return (
    <div className={styles._}>
      {statuses.map((el) => (
        <div className={styles.item}>
          <Checkbox checked={el[1]} />
          <span>{el[0]}</span>
          <button
            className={styles.upperLayer}
            onClick={() => handleChangeStatusValues(el[0])}
          />
        </div>
      ))}
    </div>
  );
}

export default StatusesSelector;
