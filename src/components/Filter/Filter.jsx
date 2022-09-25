/* eslint-disable dot-notation */
import { React, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Intut";
import styles from "./Filter.module.css";
import buttonStyles from "../UI/Button/Button.module.css";

function Filter() {
  const [additionalFilterState, setAdditionalFilterState] = useState(false);
  const openAdditionalFilter = (event) => {
    setAdditionalFilterState(!additionalFilterState);
    event.currentTarget.classList.toggle(buttonStyles["button_filled"]);
  };

  return (
    <div className={styles.filter}>
      <div className={styles["filter__main"]}>
        <div className={styles["filter__main_left-block"]}>
          <div className={styles["filter__main__input-wrapper"]}>
            <Input type="searchbar" placeholder="Номер заказа или ФИО" />
          </div>
          <Button
            icon="filter"
            text="Фильтры"
            callback={openAdditionalFilter}
          />
          <Button text="Сбросить фильтры" />
        </div>

        <div className={styles["filter__main_right-block"]}>
          <Button icon="refresh" text="Загрузка" />
        </div>
      </div>

      <div
        className={`${styles.filter__additional} ${
          additionalFilterState && styles.filter__additional_active
        }`}
      >
        <div className={styles["filter__order-date"]}>
          <Input
            textBefore="c"
            label="Дата оформления"
            placeholder="dd.mm.yyyy"
          />
          <Input textBefore="по" placeholder="dd.mm.yyyy" />
        </div>

        <div className={styles["filter__order-status"]}>
          <Input label="Статус заказа" placeholder="dd.mm.yyyy" />
        </div>

        <div className={styles["filter__order-sum"]}>
          <Input textBefore="от" label="Сумма заказа" placeholder="&#8381;" />
          <Input textBefore="до" placeholder="&#8381;" />
        </div>
      </div>
    </div>
  );
}

export default Filter;
