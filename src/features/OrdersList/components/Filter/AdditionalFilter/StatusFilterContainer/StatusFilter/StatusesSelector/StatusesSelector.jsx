/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import Checkbox from "shared/Chechbox/Checkbox";
import styles from "./StatusesSelector.module.css";

const NAMES_OF_STATUS = {
  new: "Новый",
  calculating: "Расчет",
  confirm: "Подтвержден",
  postponed: "Отложен",
  done: "Выполнен",
  canceled: "Отменен",
};

function StatusesSelector({ statusValues, handleChangeStatusValues }) {
  const statuses = Object.entries(statusValues);
  return (
    <>
      {statuses.map((el) => (
        <div className={styles.item}>
          <Checkbox checked={el[1]} />
          <span>{NAMES_OF_STATUS[el[0]]}</span>
          <button
            className={styles.upperLayer}
            onClick={() => handleChangeStatusValues(el[0])}
          />
        </div>
      ))}
    </>
  );
}

export default StatusesSelector;
