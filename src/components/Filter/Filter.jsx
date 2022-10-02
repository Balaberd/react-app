/* eslint-disable dot-notation */
import { React, useState } from "react";
import cn from "classnames";
import Button from "../UI/Button/Button";
import styles from "./Filter.module.css";
import buttonStyles from "../UI/Button/Button.module.css";
import FilterOrderSum from "./FilterComponents/FilterOrderSum";
import FilterOrderStatus from "./FilterComponents/FilterOrderStatus";
import FilterOrderDate from "./FilterComponents/FilterOrderDate";
import Input from "../UI/Input/Input";
import Icon from "../UI/Icon/Icon";

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
            <Input
              propsStyles={{ incorrect: false, locked: false }}
              label={null}
              placeholder="Номер заказа или ФИО"
              contentBefore={<Icon type="search" />}
            />
          </div>
          <Button
            propsStyles={{
              disabled: false,
              filled: false,
              short: false,
              fullWidth: false,
            }}
            text="Фильтры"
            icon="filter"
            callback={openAdditionalFilter}
          />
          <Button
            propsStyles={{
              disabled: false,
              filled: false,
              short: false,
              fullWidth: false,
            }}
            text="Сбросить фильтры"
          />
        </div>

        <div className={styles["filter__main_right-block"]}>
          <Button
            propsStyles={{
              disabled: false,
              filled: false,
              short: false,
              fullWidth: false,
            }}
            text="Загрузка"
            icon="refresh"
          />
        </div>
      </div>

      <div
        className={cn(styles.filter__additional, {
          [styles.filter__additional_active]: additionalFilterState,
        })}
      >
        <FilterOrderDate />
        <FilterOrderStatus />
        <FilterOrderSum />
      </div>
    </div>
  );
}

export default Filter;
