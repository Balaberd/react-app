import { React } from "react";
import cn from "classnames";
import styles from "./Filter.module.css";
import Input from "../../../shared/Input/Input";
import Button from "../../../shared/Button/Button";
import Icon from "../../../shared/Icon/Icon";

function Filter({
  searchbarValue,
  changeSeachbarValue,
  resetSeachbarValue,
  changeFilterVisibility,
  additionalFilterVisibility,
  children,
  resetAllFilters,
  className,
}) {
  const componentStyles = cn(styles.filter, className);
  return (
    <div className={componentStyles}>
      <div className={styles.filter__main}>
        <div className={styles.filter__main__leftBlock}>
          <div className={styles.filter__main__inputWrapper}>
            <Input
              value={searchbarValue}
              onChange={changeSeachbarValue}
              resetValue={resetSeachbarValue}
              placeholder="Номер заказа или ФИО"
              contentBefore={<Icon type="search" />}
            />
          </div>
          <Button
            icon="filter"
            onClick={changeFilterVisibility}
            isFilled={additionalFilterVisibility}
          >
            Фильтры
          </Button>
          <Button onClick={resetAllFilters}>Сбросить фильтры</Button>
        </div>
        <div>
          <Button icon="refresh">Загрузка</Button>
        </div>
      </div>
      {children}
    </div>
  );
}

export default Filter;
