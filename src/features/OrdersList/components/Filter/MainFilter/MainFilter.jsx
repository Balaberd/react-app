import React from "react";
import Input from "shared/Input/Input";
import Button from "shared/Button/Button";
import Icon from "shared/Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSearchbar,
  resetAllFilters,
} from "features/OrdersList/model/filters/filtersSlice";
import { getSearchbarValue } from "features/OrdersList/model/selectors";
import { resetCheckedOrders } from "features/OrdersList/model/orders/ordersSlice";
import styles from "./MainFilter.module.css";

function MainFilter({
  additionalFilterVisibility,
  handleToggleAdditionalFilter,
  onResetAdditionalFilters,
}) {
  const dispatch = useDispatch();

  const searchbarValue = useSelector(getSearchbarValue);

  const handleChangeSearchbar = ({ target: { value } }) => {
    dispatch(changeSearchbar(value));
  };

  const handleResetValue = () => {
    dispatch(changeSearchbar(""));
  };

  const handleResetAllFilters = () => {
    dispatch(resetCheckedOrders());
    dispatch(resetAllFilters());
    onResetAdditionalFilters();
  };

  return (
    <div className={styles._}>
      <div className={styles.leftBlock}>
        <div className={styles.searchbarWrapper}>
          <Input
            value={searchbarValue}
            onChange={handleChangeSearchbar}
            onReset={handleResetValue}
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
