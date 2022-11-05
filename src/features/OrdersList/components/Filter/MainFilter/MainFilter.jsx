import { React, useContext } from "react";
import Input from "shared/Input/Input";
import Button from "shared/Button/Button";
import Icon from "shared/Icon/Icon";
// eslint-disable-next-line import/no-cycle
import { FiltersContext } from "features/OrdersList/OrdersList";
import styles from "./MainFilter.module.css";

function MainFilter({
  additionalFilterVisibility,
  handleToggleAdditionalFilter,
}) {
  const {
    searchbarValue,
    handleChangeSearchbar,
    handleResetSearchbar,
    handleResetAllFilters,
  } = useContext(FiltersContext);
  return (
    <div className={styles._}>
      <div className={styles.leftBlock}>
        <div className={styles.searchbarWrapper}>
          <Input
            value={searchbarValue}
            onChange={handleChangeSearchbar}
            onReset={handleResetSearchbar}
            placeholder="Номер заказа или ФИО"
            prefix={<Icon type="search" />}
          />
        </div>
        <Button
          icon="filter"
          onClick={handleToggleAdditionalFilter}
          theme={additionalFilterVisibility && "primary"}
        >
          Фильтры
        </Button>
        <Button onClick={handleResetAllFilters}>Сбросить фильтры</Button>
      </div>
      <div>
        <Button icon="refresh">Загрузка</Button>
      </div>
    </div>
  );
}

export default MainFilter;
