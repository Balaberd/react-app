/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import cn from "classnames";
import React from "react";
import Checkbox from "../../../../shared/Chechbox/Checkbox";
import styles from "./StatusesSelector.module.css";

function StatusesSelector({ statusValues, setStatusValues }) {
  const changeStatus = (el) => {
    setStatusValues({ ...statusValues, [el]: !statusValues[el] });
  };
  return (
    <div className={cn(styles.dropdown, styles.dropdown_status)}>
      {Object.keys(statusValues).map((el) => (
        <div
          key={el}
          className={cn(styles.dropdown__item, {
            [styles.dropdown__radio_checked]: statusValues[el],
          })}
        >
          <Checkbox checked={statusValues[el]} />
          <span className={styles.dropdown__itemText}>{el}</span>
          <button
            className={styles.dropdown__item__upperLayer}
            onClick={() => changeStatus(el)}
          />
        </div>
      ))}
    </div>
  );
}

export default StatusesSelector;
