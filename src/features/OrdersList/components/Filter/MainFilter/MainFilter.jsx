import React from "react";
import Input from "shared/Input/Input";
import Button from "shared/Button/Button";
import Icon from "shared/Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchbar } from "features/OrdersList/model/filters/filtersSlice";
import {
  getFilters,
  isAdditionalFiltersActive,
} from "features/OrdersList/model/selectors";
import cn from "classnames";
import styles from "./MainFilter.module.css";

function MainFilter({
  additionalFilterVisibility,
  handleToggleAdditionalFilter,
  onResetAdditionalFilters,
}) {
  const dispatch = useDispatch();

  const { searchbar: searchbarValue } = useSelector(getFilters);

  const handleChangeSearchbar = ({ target: { value } }) => {
    dispatch(changeSearchbar(value));
  };

  const handleResetValue = () => {
    dispatch(changeSearchbar(""));
  };

  const isActive = useSelector(isAdditionalFiltersActive);

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
        <Button
          onClick={onResetAdditionalFilters}
          className={cn(styles.resetFilters, { [styles.inactive]: isActive })}
        >
          Сбросить фильтры
        </Button>
      </div>
      <div>
        <Button icon="refresh">Загрузка</Button>
      </div>
    </div>
  );
}

export default MainFilter;
